const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, 'chemtutor.db');
const db = new Database(dbPath);

function initDatabase() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'student',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Progress table
  db.exec(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module_id TEXT NOT NULL,
      section_type TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      score REAL,
      completed_at DATETIME,
      FOREIGN KEY (user_id) REFERENCES users(id),
      UNIQUE(user_id, module_id, section_type)
    )
  `);

  // Quiz attempts table
  db.exec(`
    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module_id TEXT NOT NULL,
      answers TEXT NOT NULL,
      score REAL NOT NULL,
      total_questions INTEGER NOT NULL,
      attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Create default admin if not exists
  const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
  if (!adminExists) {
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);
    db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)').run('admin', hashedPassword, 'admin');
    console.log('✅ Default admin user created');
  }

  // Create Reanna's account if not exists
  const reannaExists = db.prepare('SELECT id FROM users WHERE username = ?').get('reanna');
  if (!reannaExists) {
    const hashedPassword = bcrypt.hashSync('chemistry2024', 10);
    db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)').run('reanna', hashedPassword, 'student');
    console.log('✅ Reanna\'s account created (password: chemistry2024)');
  }

  console.log('📦 Database initialized');
}

module.exports = { db, initDatabase };
