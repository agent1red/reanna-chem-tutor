const express = require('express');
const bcrypt = require('bcryptjs');
const { getDb, getNextId } = require('../db/init');
const { generateToken, authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const db = getDb();
  const user = db.data.users.find(u => u.username === username.toLowerCase());
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = generateToken(user);
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  });
});

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const db = getDb();
  const existing = db.data.users.find(u => u.username === username.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: getNextId('users'),
    username: username.toLowerCase(),
    password: hashedPassword,
    role: 'student',
    created_at: new Date().toISOString()
  };
  
  db.data.users.push(newUser);
  await db.write();

  const token = generateToken(newUser);
  res.status(201).json({
    token,
    user: { id: newUser.id, username: newUser.username, role: newUser.role }
  });
});

// Get current user
router.get('/me', authenticateToken, (req, res) => {
  const db = getDb();
  const user = db.data.users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({
    id: user.id,
    username: user.username,
    role: user.role,
    created_at: user.created_at
  });
});

module.exports = router;
