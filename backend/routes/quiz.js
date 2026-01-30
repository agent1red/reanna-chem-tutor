const express = require('express');
const OpenAI = require('openai');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// Grade a fill-in-the-blank answer using AI
async function gradeWithAI(question, correctAnswer, userAnswer) {
  if (!openai) {
    // Fallback to simple string matching if no API key
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a chemistry teacher grading student answers. Be lenient with minor spelling errors, different but correct formats (e.g., "NaCl" vs "Sodium Chloride"), and accept scientifically equivalent answers. Respond with only "CORRECT" or "INCORRECT".`
        },
        {
          role: 'user',
          content: `Question: ${question}\nExpected Answer: ${correctAnswer}\nStudent Answer: ${userAnswer}\n\nIs the student's answer correct?`
        }
      ],
      max_tokens: 10,
      temperature: 0
    });

    const result = response.choices[0].message.content.trim().toUpperCase();
    return result === 'CORRECT';
  } catch (error) {
    console.error('AI grading error:', error);
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  }
}

// Submit quiz answers
router.post('/submit', authenticateToken, async (req, res) => {
  const { moduleId, answers } = req.body;

  if (!moduleId || !answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'moduleId and answers array required' });
  }

  let correctCount = 0;
  const results = [];

  for (const answer of answers) {
    let isCorrect = false;

    if (answer.type === 'multiple-choice') {
      isCorrect = answer.userAnswer === answer.correctAnswer;
    } else if (answer.type === 'multi-select') {
      // For multi-select, check if arrays match (order doesn't matter)
      const userAnswers = Array.isArray(answer.userAnswer) ? answer.userAnswer.sort() : [];
      const correctAnswers = Array.isArray(answer.correctAnswer) ? answer.correctAnswer.sort() : [];
      isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
    } else if (answer.type === 'fill-in-blank') {
      isCorrect = await gradeWithAI(answer.question, answer.correctAnswer, answer.userAnswer);
    }

    if (isCorrect) correctCount++;

    results.push({
      questionId: answer.questionId,
      correct: isCorrect,
      userAnswer: answer.userAnswer,
      correctAnswer: answer.correctAnswer
    });
  }

  const score = Math.round((correctCount / answers.length) * 100);

  // Save attempt
  const db = getDb();
  db.data.quizAttempts.push({
    id: getNextId('quizAttempts'),
    user_id: req.user.id,
    module_id: moduleId,
    answers: JSON.stringify(results),
    score,
    total_questions: answers.length,
    attempted_at: new Date().toISOString()
  });

  // Update progress if passed (>= 70%)
  if (score >= 70) {
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
    correctCount,
    totalQuestions: answers.length,
    passed: score >= 70,
    results
  });
});

// Get quiz history
router.get('/history/:moduleId', authenticateToken, (req, res) => {
  const db = getDb();
  const attempts = db.data.quizAttempts
    .filter(a => a.user_id === req.user.id && a.module_id === req.params.moduleId)
    .sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at))
    .slice(0, 10)
    .map(a => ({
      id: a.id,
      score: a.score,
      total_questions: a.total_questions,
      attempted_at: a.attempted_at
    }));

  res.json(attempts);
});

module.exports = router;
