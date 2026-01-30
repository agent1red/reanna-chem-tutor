const express = require('express');
const path = require('path');
const fs = require('fs');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Pre-generated audio files mapping
const audioFiles = {
  'sig-figs': 'sig-figs.mp3',
  'nomenclature': 'nomenclature.mp3',
  'matter-atoms': 'matter-atoms.mp3',
  'lab-skills': 'lab-skills.mp3'
};

// Get audio URL for a module
router.get('/:moduleId', authenticateToken, (req, res) => {
  const { moduleId } = req.params;
  
  const audioFile = audioFiles[moduleId];
  if (!audioFile) {
    return res.status(404).json({ error: 'Audio not available for this module' });
  }
  
  const audioPath = path.join(__dirname, '../../frontend/audio', audioFile);
  
  // Check if file exists
  if (!fs.existsSync(audioPath)) {
    return res.status(404).json({ error: 'Audio file not found' });
  }
  
  // Return the URL to the static audio file
  res.json({ 
    audioUrl: `/audio/${audioFile}`,
    moduleId,
    available: true
  });
});

module.exports = router;
