const express = require('express');
const { getDb, getNextId } = require('../db/init');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get all progress for current user
router.get('/', authenticateToken, (req, res) => {
  try {
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
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// Update progress for a section
router.post('/update', authenticateToken, async (req, res) => {
  try {
    const { moduleId, sectionType, completed, score } = req.body;
    
    console.log('Progress update request:', { userId: req.user.id, moduleId, sectionType, completed, score });

    if (!moduleId || !sectionType) {
      return res.status(400).json({ error: 'moduleId and sectionType required' });
    }

    const validSections = ['video', 'reading', 'practice', 'quiz'];
    if (!validSections.includes(sectionType)) {
      return res.status(400).json({ error: 'Invalid section type' });
    }

    const db = getDb();
    
    // Ensure progress array exists
    if (!db.data.progress) {
      db.data.progress = [];
    }
    
    const existing = db.data.progress.find(
      p => p.user_id === req.user.id && p.module_id === moduleId && p.section_type === sectionType
    );

    if (existing) {
      existing.completed = completed !== undefined ? completed : existing.completed;
      existing.score = score !== undefined ? score : existing.score;
      existing.completed_at = new Date().toISOString();
      console.log('Updated existing progress:', existing);
    } else {
      const newProgress = {
        id: getNextId('progress'),
        user_id: req.user.id,
        module_id: moduleId,
        section_type: sectionType,
        completed: completed || false,
        score: score || null,
        completed_at: new Date().toISOString()
      };
      db.data.progress.push(newProgress);
      console.log('Created new progress:', newProgress);
    }

    await db.write();
    console.log('Progress saved to database');
    
    res.json({ success: true, message: 'Progress updated' });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ error: 'Failed to update progress', details: error.message });
  }
});

// Get module completion percentage
router.get('/summary', authenticateToken, (req, res) => {
  try {
    const db = getDb();
    const userProgress = db.data.progress.filter(p => p.user_id === req.user.id && p.completed);

    // Get unique module IDs from progress
    const moduleIds = [...new Set(db.data.progress.map(p => p.module_id))];
    const sectionsPerModule = 4;

    const summary = moduleIds.map(moduleId => {
      const completed = userProgress.filter(p => p.module_id === moduleId).length;
      return {
        moduleId,
        completed,
        total: sectionsPerModule,
        percentage: Math.round((completed / sectionsPerModule) * 100)
      };
    });

    const totalCompleted = summary.reduce((sum, m) => sum + m.completed, 0);
    const totalSections = moduleIds.length * sectionsPerModule;

    res.json({
      modules: summary,
      overall: {
        completed: totalCompleted,
        total: totalSections || 1,
        percentage: totalSections ? Math.round((totalCompleted / totalSections) * 100) : 0
      }
    });
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
});

module.exports = router;
