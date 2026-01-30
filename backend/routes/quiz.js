const express = require('express');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Submit quiz answers and get results
router.post('/submit', authenticateToken, async (req, res) => {
  try {
    const { moduleId, answers } = req.body;

    if (!moduleId || !answers) {
      return res.status(400).json({ error: 'moduleId and answers required' });
    }

    let correctCount = 0;
    const totalQuestions = answers.length;

    // Grade each answer
    answers.forEach(answer => {
      const { type, correctAnswer, userAnswer } = answer;

      if (type === 'multi-select') {
        // For multi-select, check if arrays match (order doesn't matter)
        const correct = Array.isArray(correctAnswer) ? correctAnswer.sort() : [];
        const user = Array.isArray(userAnswer) ? userAnswer.sort() : [];
        if (JSON.stringify(correct) === JSON.stringify(user)) {
          correctCount++;
        }
      } else if (type === 'fill-in-blank') {
        // Case-insensitive comparison, trim whitespace
        const correct = String(correctAnswer).toLowerCase().trim();
        const user = String(userAnswer || '').toLowerCase().trim();
        if (correct === user) {
          correctCount++;
        }
      } else {
        // Multiple choice - exact match
        if (correctAnswer === userAnswer) {
          correctCount++;
        }
      }
    });

    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= 70;

    // Record the attempt
    const db = getDb();
    if (!db.data.quizAttempts) {
      db.data.quizAttempts = [];
    }

    db.data.quizAttempts.push({
      id: getNextId('quizAttempts'),
      user_id: req.user.id,
      module_id: moduleId,
      score,
      passed,
      total_questions: totalQuestions,
      correct_count: correctCount,
      attempted_at: new Date().toISOString()
    });

    // Update progress if passed
    if (passed) {
      if (!db.data.progress) {
        db.data.progress = [];
      }

      const existing = db.data.progress.find(
        p => p.user_id === req.user.id && p.module_id === moduleId && p.section_type === 'quiz'
      );

      if (existing) {
        existing.completed = true;
        existing.score = Math.max(existing.score || 0, score);
        existing.completed_at = new Date().toISOString();
      } else {
        db.data.progress.push({
          id: getNextId('progress'),
          user_id: req.user.id,
          module_id: moduleId,
          section_type: 'quiz',
          completed: true,
          score,
          completed_at: new Date().toISOString()
        });
      }
    }

    await db.write();

    res.json({
      score,
      passed,
      correctCount,
      totalQuestions,
      message: passed ? 'Congratulations! You passed!' : 'Keep practicing!'
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

// Get quiz history for a module
router.get('/history/:moduleId', authenticateToken, (req, res) => {
  try {
    const { moduleId } = req.params;
    const db = getDb();

    const attempts = (db.data.quizAttempts || [])
      .filter(a => a.user_id === req.user.id && a.module_id === moduleId)
      .sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at));

    res.json({
      attempts,
      bestScore: attempts.length > 0 ? Math.max(...attempts.map(a => a.score)) : 0,
      totalAttempts: attempts.length
    });
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

module.exports = router;
