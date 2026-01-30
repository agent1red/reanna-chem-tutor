const express = require('express');
const { db } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get all progress for current user
router.get('/', authenticateToken, (req, res) => {
  const progress = db.prepare(`
    SELECT module_id, section_type, completed, score, completed_at
    FROM progress
    WHERE user_id = ?
  `).all(req.user.id);

  // Group by module
  const grouped = progress.reduce((acc, item) => {
    if (!acc[item.module_id]) {
      acc[item.module_id] = {};
    }
    acc[item.module_id][item.section_type] = {
      completed: item.completed === 1,
      score: item.score,
      completed_at: item.completed_at
    };
    return acc;
  }, {});

  res.json(grouped);
});

// Update progress for a section
router.post('/update', authenticateToken, (req, res) => {
  const { moduleId, sectionType, completed, score } = req.body;

  if (!moduleId || !sectionType) {
    return res.status(400).json({ error: 'moduleId and sectionType required' });
  }

  const validSections = ['video', 'reading', 'practice', 'quiz'];
  if (!validSections.includes(sectionType)) {
    return res.status(400).json({ error: 'Invalid section type' });
  }

  const stmt = db.prepare(`
    INSERT INTO progress (user_id, module_id, section_type, completed, score, completed_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, module_id, section_type) DO UPDATE SET
      completed = excluded.completed,
      score = CASE WHEN excluded.score IS NOT NULL THEN excluded.score ELSE progress.score END,
      completed_at = datetime('now')
  `);

  stmt.run(req.user.id, moduleId, sectionType, completed ? 1 : 0, score || null);

  res.json({ success: true });
});

// Get module completion percentage
router.get('/summary', authenticateToken, (req, res) => {
  const modules = ['sig-figs', 'nomenclature', 'matter-atoms', 'lab-skills'];
  const sectionsPerModule = 4; // video, reading, practice, quiz

  const completedCount = db.prepare(`
    SELECT module_id, COUNT(*) as completed
    FROM progress
    WHERE user_id = ? AND completed = 1
    GROUP BY module_id
  `).all(req.user.id);

  const summary = modules.map(moduleId => {
    const found = completedCount.find(c => c.module_id === moduleId);
    const completed = found ? found.completed : 0;
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
