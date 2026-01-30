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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes (loaded after DB init)
async function setupRoutes() {
  const authRoutes = require('./routes/auth');
  const progressRoutes = require('./routes/progress');
  const quizRoutes = require('./routes/quiz');
  const adminRoutes = require('./routes/admin');

  app.use('/api/auth', authRoutes);
  app.use('/api/progress', progressRoutes);
  app.use('/api/quiz', quizRoutes);
  app.use('/api/admin', adminRoutes);
}

// Serve frontend for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Initialize and start server
async function start() {
  try {
    await initDatabase();
    await setupRoutes();
    
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
