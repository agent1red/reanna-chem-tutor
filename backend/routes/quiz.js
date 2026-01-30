const express = require('express');
const OpenAI = require('openai');
const { db } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Grade a fill-in-the-blank answer using AI
async function gradeWithAI(question, correctAnswer, userAnswer) {
  if (!process.env.OPENAI_API_KEY) {
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
    // Fallback to simple comparison
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
  db.prepare(`
    INSERT INTO quiz_attempts (user_id, module_id, answers, score, total_questions)
    VALUES (?, ?, ?, ?, ?)
  `).run(req.user.id, moduleId, JSON.stringify(results), score, answers.length);

  // Update progress if passed (>= 70%)
  if (score >= 70) {
    db.prepare(`
      INSERT INTO progress (user_id, module_id, section_type, completed, score, completed_at)
      VALUES (?, ?, 'quiz', 1, ?, datetime('now'))
      ON CONFLICT(user_id, module_id, section_type) DO UPDATE SET
        completed = 1,
        score = MAX(progress.score, excluded.score),
        completed_at = datetime('now')
    `).run(req.user.id, moduleId, score);
  }

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
  const attempts = db.prepare(`
    SELECT id, score, total_questions, attempted_at
    FROM quiz_attempts
    WHERE user_id = ? AND module_id = ?
    ORDER BY attempted_at DESC
    LIMIT 10
  `).all(req.user.id, req.params.moduleId);

  res.json(attempts);
});

module.exports = router;
