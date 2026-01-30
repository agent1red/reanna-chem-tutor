const express = require('express');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get all progress for current user
router.get('/', authenticateToken, (req, res) => {
  const db = getDb();
  const userProgress = db.data.progress.filter(p => p.user_id === req.user.id);

  // Group by module
  const grouped = userProgress.reduce((acc, item) => {
    if (!acc[item.module_id]) {
      acc[item.module_id] = {};
    }
    acc[item.module_id][item.section_type] = {
      completed: item.completed,
      score: item.score,
      completed_at: item.completed_at
    };
    return acc;
  }, {});

  res.json(grouped);
});

// Update progress for a section
router.post('/update', authenticateToken, async (req, res) => {
  const { moduleId, sectionType, completed, score } = req.body;

  if (!moduleId || !sectionType) {
    return res.status(400).json({ error: 'moduleId and sectionType required' });
  }

  const validSections = ['video', 'reading', 'practice', 'quiz'];
  if (!validSections.includes(sectionType)) {
    return res.status(400).json({ error: 'Invalid section type' });
  }

  const db = getDb();
  const existing = db.data.progress.find(
    p => p.user_id === req.user.id && p.module_id === moduleId && p.section_type === sectionType
  );

  if (existing) {
    existing.completed = completed || existing.completed;
    existing.score = score !== undefined ? score : existing.score;
    existing.completed_at = new Date().toISOString();
  } else {
    db.data.progress.push({
      id: getNextId('progress'),
      user_id: req.user.id,
      module_id: moduleId,
      section_type: sectionType,
      completed: completed || false,
      score: score || null,
      completed_at: new Date().toISOString()
    });
  }

  await db.write();
  res.json({ success: true });
});

// Get module completion percentage
router.get('/summary', authenticateToken, (req, res) => {
  const modules = ['sig-figs', 'nomenclature', 'matter-atoms', 'lab-skills'];
  const sectionsPerModule = 4;

  const db = getDb();
  const userProgress = db.data.progress.filter(p => p.user_id === req.user.id && p.completed);

  const summary = modules.map(moduleId => {
    const completed = userProgress.filter(p => p.module_id === moduleId).length;
    return {
      moduleId,
      completed,
      total: sectionsPerModule,
      percentage: Math.round((completed / sectionsPerModule) * 100)
    };
  });

  const totalCompleted = summary.reduce((sum, m) => sum + m.completed, 0);
  const totalSections = modules.length * sectionsPerModule;

  res.json({
    modules: summary,
    overall: {
      completed: totalCompleted,
      total: totalSections,
      percentage: Math.round((totalCompleted / totalSections) * 100)
    }
  });
});

module.exports = router;
