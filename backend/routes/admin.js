const express = require('express');
const bcrypt = require('bcryptjs');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// All routes require admin
router.use(authenticateToken);
router.use(requireAdmin);

// Get all students
router.get('/students', (req, res) => {
  const db = getDb();
  const students = db.data.users
    .filter(u => u.role === 'student')
    .map(u => ({
      id: u.id,
      username: u.username,
      role: u.role,
      created_at: u.created_at
    }))
    .sort((a, b) => a.username.localeCompare(b.username));

  res.json(students);
});

// Get student progress
router.get('/students/:id/progress', (req, res) => {
  const studentId = parseInt(req.params.id);
  const db = getDb();

  const student = db.data.users.find(u => u.id === studentId && u.role === 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const progress = db.data.progress.filter(p => p.user_id === studentId);
  const quizAttempts = db.data.quizAttempts
    .filter(a => a.user_id === studentId)
    .sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at));

  res.json({
    student: { id: student.id, username: student.username },
    progress,
    quizAttempts
  });
});

// Reset student progress
router.post('/students/:id/reset', async (req, res) => {
  const studentId = parseInt(req.params.id);
  const { moduleId } = req.body;

  const db = getDb();
  const student = db.data.users.find(u => u.id === studentId && u.role === 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  if (moduleId) {
    // Reset specific module
    db.data.progress = db.data.progress.filter(
      p => !(p.user_id === studentId && p.module_id === moduleId)
    );
    db.data.quizAttempts = db.data.quizAttempts.filter(
      a => !(a.user_id === studentId && a.module_id === moduleId)
    );
  } else {
    // Reset all progress
    db.data.progress = db.data.progress.filter(p => p.user_id !== studentId);
    db.data.quizAttempts = db.data.quizAttempts.filter(a => a.user_id !== studentId);
  }

  await db.write();
  res.json({ success: true, message: moduleId ? `Reset ${moduleId} progress` : 'Reset all progress' });
});

// Create new student account
router.post('/students', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const db = getDb();
  const existing = db.data.users.find(u => u.username === username.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: getNextId('users'),
    username: username.toLowerCase(),
    password: hashedPassword,
    role: 'student',
    created_at: new Date().toISOString()
  };

  db.data.users.push(newUser);
  await db.write();

  res.status(201).json({
    id: newUser.id,
    username: newUser.username,
    role: newUser.role
  });
});

// Change student password
router.post('/students/:id/password', async (req, res) => {
  const studentId = parseInt(req.params.id);
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const db = getDb();
  const student = db.data.users.find(u => u.id === studentId && u.role === 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  student.password = bcrypt.hashSync(password, 10);
  await db.write();

  res.json({ success: true });
});

// Get overall stats
router.get('/stats', (req, res) => {
  const db = getDb();
  
  const totalStudents = db.data.users.filter(u => u.role === 'student').length;
  
  // Calculate average progress
  const studentIds = db.data.users.filter(u => u.role === 'student').map(u => u.id);
  let totalProgress = 0;
  studentIds.forEach(id => {
    const completed = db.data.progress.filter(p => p.user_id === id && p.completed).length;
    totalProgress += (completed / 16) * 100; // 16 total sections
  });
  const averageProgress = studentIds.length > 0 ? Math.round(totalProgress / studentIds.length) : 0;
  
  const totalQuizAttempts = db.data.quizAttempts.length;
  
  const avgQuizScore = db.data.quizAttempts.length > 0
    ? Math.round(db.data.quizAttempts.reduce((sum, a) => sum + a.score, 0) / db.data.quizAttempts.length)
    : 0;

  res.json({
    totalStudents,
    averageProgress,
    totalQuizAttempts,
    averageQuizScore: avgQuizScore
  });
});

module.exports = router;
