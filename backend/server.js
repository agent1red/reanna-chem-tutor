require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import database initialization
const { initDatabase } = require('./db/init');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve audio files
app.use('/audio', express.static(path.join(__dirname, '../frontend/audio')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize and start server
async function start() {
  try {
    await initDatabase();
    
    // API Routes (must be loaded BEFORE catch-all)
    const authRoutes = require('./routes/auth');
    const progressRoutes = require('./routes/progress');
    const quizRoutes = require('./routes/quiz');
    const adminRoutes = require('./routes/admin');
    const ttsRoutes = require('./routes/tts');
    const examRoutes = require('./routes/exam');

    app.use('/api/auth', authRoutes);
    app.use('/api/progress', progressRoutes);
    app.use('/api/quiz', quizRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/tts', ttsRoutes);
    app.use('/api/exam', examRoutes);
    
    // Catch-all for SPA (MUST be after API routes)
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/index.html'));
    });
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🧪 Reanna's Chemistry Tutor running at http://localhost:${PORT}`);
      console.log(`📚 Ready for learning!`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
