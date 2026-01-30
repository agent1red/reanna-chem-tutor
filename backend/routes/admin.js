const express = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../db/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// All routes require admin
router.use(authenticateToken);
router.use(requireAdmin);

// Get all students
router.get('/students', (req, res) => {
  const students = db.prepare(`
    SELECT id, username, role, created_at
    FROM users
    WHERE role = 'student'
    ORDER BY username
  `).all();

  res.json(students);
});

// Get student progress
router.get('/students/:id/progress', (req, res) => {
  const studentId = parseInt(req.params.id);

  const student = db.prepare('SELECT id, username FROM users WHERE id = ? AND role = ?').get(studentId, 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const progress = db.prepare(`
    SELECT module_id, section_type, completed, score, completed_at
    FROM progress
    WHERE user_id = ?
  `).all(studentId);

  const quizAttempts = db.prepare(`
    SELECT module_id, score, total_questions, attempted_at
    FROM quiz_attempts
    WHERE user_id = ?
    ORDER BY attempted_at DESC
  `).all(studentId);

  res.json({
    student,
    progress,
    quizAttempts
  });
});

// Reset student progress
router.post('/students/:id/reset', (req, res) => {
  const studentId = parseInt(req.params.id);
  const { moduleId } = req.body; // Optional: reset specific module only

  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(studentId, 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  if (moduleId) {
    // Reset specific module
    db.prepare('DELETE FROM progress WHERE user_id = ? AND module_id = ?').run(studentId, moduleId);
    db.prepare('DELETE FROM quiz_attempts WHERE user_id = ? AND module_id = ?').run(studentId, moduleId);
  } else {
    // Reset all progress
    db.prepare('DELETE FROM progress WHERE user_id = ?').run(studentId);
    db.prepare('DELETE FROM quiz_attempts WHERE user_id = ?').run(studentId);
  }

  res.json({ success: true, message: moduleId ? `Reset ${moduleId} progress` : 'Reset all progress' });
});

// Create new student account
router.post('/students', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const result = db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)').run(
    username.toLowerCase(),
    hashedPassword,
    'student'
  );

  res.status(201).json({
    id: result.lastInsertRowid,
    username: username.toLowerCase(),
    role: 'student'
  });
});

// Change student password
router.post('/students/:id/password', (req, res) => {
  const studentId = parseInt(req.params.id);
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const student = db.prepare('SELECT id FROM users WHERE id = ? AND role = ?').get(studentId, 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashedPassword, studentId);

  res.json({ success: true });
});

// Get overall stats
router.get('/stats', (req, res) => {
  const totalStudents = db.prepare('SELECT COUNT(*) as count FROM users WHERE role = ?').get('student').count;
  
  const avgProgress = db.prepare(`
    SELECT AVG(percentage) as avg FROM (
      SELECT user_id, (COUNT(*) * 100.0 / 16) as percentage
      FROM progress
      WHERE completed = 1
      GROUP BY user_id
    )
  `).get().avg || 0;

  const totalQuizAttempts = db.prepare('SELECT COUNT(*) as count FROM quiz_attempts').get().count;
  
  const avgQuizScore = db.prepare('SELECT AVG(score) as avg FROM quiz_attempts').get().avg || 0;

  res.json({
    totalStudents,
    averageProgress: Math.round(avgProgress),
    totalQuizAttempts,
    averageQuizScore: Math.round(avgQuizScore)
  });
});

module.exports = router;
