const express = require('express');
const OpenAI = require('openai');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// Final exam questions - comprehensive review
const finalExamQuestions = [
  // Sig Figs (5 questions)
  { id: 1, module: 'sig-figs', type: 'multiple-choice', question: 'How many significant figures are in 0.00780?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
  { id: 2, module: 'sig-figs', type: 'fill-in-blank', question: 'How many significant figures are in 10.020?', correctAnswer: '5' },
  { id: 3, module: 'sig-figs', type: 'multiple-choice', question: 'When multiplying, round to the:', options: ['Most decimal places', 'Least decimal places', 'Most sig figs', 'Least sig figs'], correctAnswer: 'Least sig figs' },
  { id: 4, module: 'sig-figs', type: 'fill-in-blank', question: 'Calculate with correct sig figs: 3.20 × 2.1 = ?', correctAnswer: '6.7' },
  { id: 5, module: 'sig-figs', type: 'fill-in-blank', question: 'Calculate with correct sig figs: 15.2 + 1.45 = ?', correctAnswer: '16.7' },
  
  // Nomenclature (5 questions)
  { id: 6, module: 'nomenclature', type: 'fill-in-blank', question: 'Name this compound: CaCl₂', correctAnswer: 'calcium chloride' },
  { id: 7, module: 'nomenclature', type: 'fill-in-blank', question: 'Name this compound: Fe₂O₃', correctAnswer: 'iron(III) oxide' },
  { id: 8, module: 'nomenclature', type: 'fill-in-blank', question: 'Name this compound: SO₃', correctAnswer: 'sulfur trioxide' },
  { id: 9, module: 'nomenclature', type: 'multiple-choice', question: 'Which prefix means 6?', options: ['penta', 'hexa', 'hepta', 'octa'], correctAnswer: 'hexa' },
  { id: 10, module: 'nomenclature', type: 'fill-in-blank', question: 'Write the formula for: magnesium nitride', correctAnswer: 'Mg3N2' },
  
  // Matter & Atoms (5 questions)
  { id: 11, module: 'matter-atoms', type: 'multiple-choice', question: 'Which particle has no charge?', options: ['Proton', 'Neutron', 'Electron', 'Ion'], correctAnswer: 'Neutron' },
  { id: 12, module: 'matter-atoms', type: 'fill-in-blank', question: 'The atomic number equals the number of _____', correctAnswer: 'protons' },
  { id: 13, module: 'matter-atoms', type: 'multiple-choice', question: 'Salt water is a:', options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'], correctAnswer: 'Homogeneous mixture' },
  { id: 14, module: 'matter-atoms', type: 'fill-in-blank', question: 'An atom with 12 protons and 12 neutrons has a mass number of:', correctAnswer: '24' },
  { id: 15, module: 'matter-atoms', type: 'multiple-choice', question: 'Rusting is an example of a:', options: ['Physical property', 'Physical change', 'Chemical property', 'Mixture'], correctAnswer: 'Chemical property' },
  
  // Lab Skills (5 questions)
  { id: 16, module: 'lab-skills', type: 'fill-in-blank', question: 'The formula for density is D = m ÷ ___', correctAnswer: 'V' },
  { id: 17, module: 'lab-skills', type: 'fill-in-blank', question: 'An object has mass 60g and volume 20mL. Its density is ___ g/mL', correctAnswer: '3' },
  { id: 18, module: 'lab-skills', type: 'multiple-choice', question: 'An object with density 0.85 g/mL will ___ in water.', options: ['Float', 'Sink', 'Dissolve', 'React'], correctAnswer: 'Float' },
  { id: 19, module: 'lab-skills', type: 'fill-in-blank', question: 'If density = 8 g/mL and volume = 5 mL, then mass = ___ g', correctAnswer: '40' },
  { id: 20, module: 'lab-skills', type: 'multiple-choice', question: 'To find the volume of an irregular solid, you would use:', options: ['A ruler', 'A balance', 'Water displacement', 'Estimation'], correctAnswer: 'Water displacement' }
];

// Check if user can take final exam (all modules completed)
router.get('/eligibility', authenticateToken, (req, res) => {
  const db = getDb();
  const modules = ['sig-figs', 'nomenclature', 'matter-atoms', 'lab-skills'];
  const sectionsPerModule = 4;
  
  const userProgress = db.data.progress.filter(p => p.user_id === req.user.id && p.completed);
  const completedByModule = {};
  
  modules.forEach(m => {
    completedByModule[m] = userProgress.filter(p => p.module_id === m).length;
  });

  const allComplete = modules.every(m => completedByModule[m] >= sectionsPerModule);
  
  res.json({
    eligible: allComplete,
    progress: completedByModule,
    required: sectionsPerModule
  });
});

// Get final exam questions
router.get('/questions', authenticateToken, (req, res) => {
  // Shuffle questions for each attempt
  const shuffled = [...finalExamQuestions].sort(() => Math.random() - 0.5);
  
  // Return questions without answers
  const questions = shuffled.map(q => ({
    id: q.id,
    module: q.module,
    type: q.type,
    question: q.question,
    options: q.options || null
  }));
  
  res.json(questions);
});

// Submit final exam
router.post('/submit', authenticateToken, async (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'Answers array required' });
  }

  let correctCount = 0;
  const results = [];

  for (const answer of answers) {
    const question = finalExamQuestions.find(q => q.id === answer.questionId);
    if (!question) continue;

    let isCorrect = false;

    if (question.type === 'multiple-choice') {
      isCorrect = answer.userAnswer === question.correctAnswer;
    } else if (question.type === 'fill-in-blank') {
      // Use AI grading for fill-in-blank
      if (openai) {
        try {
          const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: 'You are a chemistry teacher grading answers. Be lenient with minor spelling, formatting differences, and accept equivalent answers. Reply only "CORRECT" or "INCORRECT".'
              },
              {
                role: 'user',
                content: `Question: ${question.question}\nExpected: ${question.correctAnswer}\nStudent: ${answer.userAnswer}\n\nIs this correct?`
              }
            ],
            max_tokens: 10,
            temperature: 0
          });
          isCorrect = response.choices[0].message.content.trim().toUpperCase() === 'CORRECT';
        } catch (e) {
          isCorrect = answer.userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
        }
      } else {
        isCorrect = answer.userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
      }
    }

    if (isCorrect) correctCount++;

    results.push({
      questionId: question.id,
      module: question.module,
      correct: isCorrect,
      userAnswer: answer.userAnswer,
      correctAnswer: question.correctAnswer
    });
  }

  const score = Math.round((correctCount / finalExamQuestions.length) * 100);
  const passed = score >= 70;

  // Save exam attempt
  const db = getDb();
  if (!db.data.examAttempts) db.data.examAttempts = [];
  
  db.data.examAttempts.push({
    id: getNextId('examAttempts'),
    user_id: req.user.id,
    score,
    correct_count: correctCount,
    total_questions: finalExamQuestions.length,
    passed,
    results: JSON.stringify(results),
    attempted_at: new Date().toISOString()
  });
  
  await db.write();

  // Calculate breakdown by module
  const breakdown = {};
  results.forEach(r => {
    if (!breakdown[r.module]) breakdown[r.module] = { correct: 0, total: 0 };
    breakdown[r.module].total++;
    if (r.correct) breakdown[r.module].correct++;
  });

  res.json({
    score,
    correctCount,
    totalQuestions: finalExamQuestions.length,
    passed,
    results,
    breakdown
  });
});

// Get exam history
router.get('/history', authenticateToken, (req, res) => {
  const db = getDb();
  if (!db.data.examAttempts) db.data.examAttempts = [];
  
  const attempts = db.data.examAttempts
    .filter(a => a.user_id === req.user.id)
    .sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at))
    .slice(0, 10)
    .map(a => ({
      id: a.id,
      score: a.score,
      passed: a.passed,
      attempted_at: a.attempted_at
    }));

  res.json(attempts);
});

module.exports = router;
