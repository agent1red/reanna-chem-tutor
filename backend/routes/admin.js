const express = require('express');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// All routes require admin
router.use(authenticateToken);
router.use(requireAdmin);

// Get all students with their progress summary
router.get('/students', (req, res) => {
  const db = getDb();
  const students = db.data.users
    .filter(u => u.role === 'student')
    .map(u => {
      const completedSections = db.data.progress.filter(p => p.user_id === u.id && p.completed).length;
      const progressPercent = Math.round((completedSections / 16) * 100);
      const quizAttempts = db.data.quizAttempts.filter(a => a.user_id === u.id);
      const latestQuiz = quizAttempts.sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at))[0];
      
      return {
        id: u.id,
        username: u.username,
        created_at: u.created_at,
        progress: progressPercent,
        completedSections,
        quizAttempts: quizAttempts.length,
        lastQuizScore: latestQuiz?.score || null
      };
    })
    .sort((a, b) => a.username.localeCompare(b.username));

  res.json(students);
});

// Get detailed student progress
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

// Toggle section completion for a student
router.post('/students/:id/toggle-section', async (req, res) => {
  const studentId = parseInt(req.params.id);
  const { moduleId, sectionType } = req.body;

  if (!moduleId || !sectionType) {
    return res.status(400).json({ error: 'moduleId and sectionType required' });
  }

  const db = getDb();
  const student = db.data.users.find(u => u.id === studentId && u.role === 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Find existing progress entry
  const existingIndex = db.data.progress.findIndex(
    p => p.user_id === studentId && p.module_id === moduleId && p.section_type === sectionType
  );

  if (existingIndex >= 0) {
    // Toggle: if exists and completed, remove it (unmark)
    db.data.progress.splice(existingIndex, 1);
    await db.write();
    res.json({ success: true, completed: false, message: `Unmarked ${moduleId} ${sectionType}` });
  } else {
    // Create new completed entry (mark complete)
    const newProgress = {
      id: getNextId('progress'),
      user_id: studentId,
      module_id: moduleId,
      section_type: sectionType,
      completed: true,
      score: null,
      completed_at: new Date().toISOString()
    };
    db.data.progress.push(newProgress);
    await db.write();
    res.json({ success: true, completed: true, message: `Marked ${moduleId} ${sectionType} complete` });
  }
});

// Reset all student progress
router.post('/students/:id/reset', async (req, res) => {
  const studentId = parseInt(req.params.id);

  const db = getDb();
  const student = db.data.users.find(u => u.id === studentId && u.role === 'student');
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  db.data.progress = db.data.progress.filter(p => p.user_id !== studentId);
  db.data.quizAttempts = db.data.quizAttempts.filter(a => a.user_id !== studentId);

  await db.write();
  res.json({ success: true, message: 'Reset all progress' });
});

// Get answer key for a module's quiz or final exam
router.get('/answer-key/:moduleId', (req, res) => {
  const moduleId = req.params.moduleId;
  const fs = require('fs');
  const path = require('path');
  
  // Handle final exam separately
  if (moduleId === 'final-exam') {
    // Compile all quiz questions from all modules for the exam answer key
    const allQuestions = [];
    const moduleFiles = ['sig-figs-questions.json', 'nomenclature-questions.json', 'matter-atoms-questions.json', 'lab-skills-questions.json'];
    const moduleNames = ['sig-figs', 'nomenclature', 'matter-atoms', 'lab-skills'];
    
    moduleFiles.forEach((file, idx) => {
      const filePath = path.join(__dirname, '../data', file);
      try {
        if (fs.existsSync(filePath)) {
          const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (data.quiz) {
            data.quiz.forEach(q => {
              allQuestions.push({ ...q, module: moduleNames[idx] });
            });
          }
        }
      } catch (e) { /* skip */ }
    });
    
    return res.json({ 
      quiz: allQuestions,
      practice: [],
      isExam: true,
      totalQuestions: allQuestions.length
    });
  }
  
  const questionFiles = {
    'sig-figs': 'sig-figs-questions.json',
    'nomenclature': 'nomenclature-questions.json', 
    'matter-atoms': 'matter-atoms-questions.json',
    'lab-skills': 'lab-skills-questions.json'
  };
  
  const filename = questionFiles[moduleId];
  if (!filename) {
    return res.status(404).json({ error: 'Module not found' });
  }
  
  const filePath = path.join(__dirname, '../data', filename);
  
  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      res.json(data);
    } else {
      res.json({ quiz: [], practice: [], message: 'Answer key file not found' });
    }
  } catch (e) {
    res.status(500).json({ error: 'Failed to load answer key' });
  }
});

// Get overall stats
router.get('/stats', (req, res) => {
  const db = getDb();
  
  const studentIds = db.data.users.filter(u => u.role === 'student').map(u => u.id);
  const totalStudents = studentIds.length;
  
  let totalStudentProgress = 0;
  studentIds.forEach(id => {
    const completed = db.data.progress.filter(p => p.user_id === id && p.completed).length;
    totalStudentProgress += (completed / 16) * 100;
  });
  const averageProgress = totalStudents > 0 ? Math.round(totalStudentProgress / totalStudents) : 0;
  
  const studentQuizAttempts = db.data.quizAttempts.filter(a => studentIds.includes(a.user_id));
  const totalQuizAttempts = studentQuizAttempts.length;
  
  const avgQuizScore = studentQuizAttempts.length > 0
    ? Math.round(studentQuizAttempts.reduce((sum, a) => sum + a.score, 0) / studentQuizAttempts.length)
    : 0;

  res.json({
    totalStudents,
    averageProgress,
    totalQuizAttempts,
    averageQuizScore: avgQuizScore
  });
});

module.exports = router;
