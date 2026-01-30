const express = require('express');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Module question pools (server-side copy for exam generation)
const moduleQuestionPools = {
  'sig-figs': require('../data/sig-figs-questions.json'),
  'nomenclature': require('../data/nomenclature-questions.json'),
  'matter-atoms': require('../data/matter-atoms-questions.json'),
  'lab-skills': require('../data/lab-skills-questions.json')
};

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Randomize options for multiple choice questions
function randomizeOptions(question) {
  if ((question.type === 'multiple-choice' || question.type === 'multi-select') && question.options) {
    return { ...question, options: shuffleArray(question.options) };
  }
  return question;
}

// Check if user has completed all modules
router.get('/eligibility', authenticateToken, (req, res) => {
  try {
    const db = getDb();
    const moduleIds = Object.keys(moduleQuestionPools);
    const sectionsPerModule = 4;
    
    const userProgress = db.data.progress.filter(
      p => p.user_id === req.user.id && p.completed
    );

    let allCompleted = true;
    const moduleStatus = {};

    moduleIds.forEach(moduleId => {
      const completedSections = userProgress.filter(p => p.module_id === moduleId).length;
      moduleStatus[moduleId] = {
        completed: completedSections,
        total: sectionsPerModule,
        done: completedSections >= sectionsPerModule
      };
      if (completedSections < sectionsPerModule) {
        allCompleted = false;
      }
    });

    res.json({
      eligible: allCompleted,
      moduleStatus
    });
  } catch (error) {
    console.error('Error checking eligibility:', error);
    res.status(500).json({ error: 'Failed to check eligibility' });
  }
});

// Get randomized exam questions
router.get('/questions', authenticateToken, (req, res) => {
  try {
    const moduleIds = Object.keys(moduleQuestionPools);
    const questionsPerModule = 5; // 5 questions per module = 20 total
    let allQuestions = [];

    moduleIds.forEach(moduleId => {
      const pool = moduleQuestionPools[moduleId];
      if (pool && pool.quiz) {
        // Shuffle and take subset
        const shuffled = shuffleArray(pool.quiz);
        const selected = shuffled.slice(0, questionsPerModule);
        
        // Add module info and randomize options
        const withModule = selected.map((q, idx) => ({
          ...randomizeOptions(q),
          id: `${moduleId}-${idx}`,
          module: moduleId
        }));
        
        allQuestions = allQuestions.concat(withModule);
      }
    });

    // Final shuffle of all questions
    const finalQuestions = shuffleArray(allQuestions);

    res.json(finalQuestions);
  } catch (error) {
    console.error('Error getting exam questions:', error);
    res.status(500).json({ error: 'Failed to get exam questions' });
  }
});

// Submit exam
router.post('/submit', authenticateToken, async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'Answers array required' });
    }

    let correctCount = 0;
    const totalQuestions = answers.length;
    const breakdown = {};

    // Grade each answer
    answers.forEach(answer => {
      const { questionId, type, userAnswer } = answer;
      const moduleId = questionId.split('-')[0];
      
      if (!breakdown[moduleId]) {
        breakdown[moduleId] = { correct: 0, total: 0 };
      }
      breakdown[moduleId].total++;

      // Find the question in our pools
      const pool = moduleQuestionPools[moduleId];
      if (pool && pool.quiz) {
        const question = pool.quiz.find(q => q.id === answer.originalId) || 
                         pool.quiz.find(q => q.question === answer.question);
        
        if (question) {
          let isCorrect = false;
          
          if (type === 'multi-select' || question.type === 'multi-select') {
            const correct = Array.isArray(question.correctAnswers) ? question.correctAnswers.sort() : [];
            const user = Array.isArray(userAnswer) ? userAnswer.sort() : [];
            isCorrect = JSON.stringify(correct) === JSON.stringify(user);
          } else if (type === 'fill-in-blank' || question.type === 'fill-in-blank') {
            const correct = String(question.correctAnswer).toLowerCase().trim();
            const user = String(userAnswer || '').toLowerCase().trim();
            isCorrect = correct === user;
          } else {
            isCorrect = question.correctAnswer === userAnswer;
          }

          if (isCorrect) {
            correctCount++;
            breakdown[moduleId].correct++;
          }
        }
      }
    });

    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= 70;

    // Record the attempt
    const db = getDb();
    if (!db.data.examAttempts) {
      db.data.examAttempts = [];
    }

    db.data.examAttempts.push({
      id: getNextId('examAttempts'),
      user_id: req.user.id,
      score,
      passed,
      total_questions: totalQuestions,
      correct_count: correctCount,
      breakdown,
      attempted_at: new Date().toISOString()
    });

    await db.write();

    res.json({
      score,
      passed,
      correctCount,
      totalQuestions,
      breakdown,
      message: passed ? '🎓 Congratulations! You passed the final exam!' : 'Keep studying and try again!'
    });
  } catch (error) {
    console.error('Error submitting exam:', error);
    res.status(500).json({ error: 'Failed to submit exam' });
  }
});

module.exports = router;
