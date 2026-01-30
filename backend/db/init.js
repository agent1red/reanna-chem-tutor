const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, 'chemtutor.json');
const adapter = new JSONFile(dbPath);
const defaultData = { users: [], progress: [], quizAttempts: [] };

let db;

async function initDatabase() {
  db = new Low(adapter, defaultData);
  await db.read();
  
  // Initialize with default data if empty
  db.data ||= defaultData;
  
  // Create default admin if not exists
  const adminExists = db.data.users.find(u => u.username === 'admin');
  if (!adminExists) {
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);
    db.data.users.push({
      id: 1,
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
      created_at: new Date().toISOString()
    });
    console.log('✅ Default admin user created');
  }

  // Create Reanna's account if not exists
  const reannaExists = db.data.users.find(u => u.username === 'reanna');
  if (!reannaExists) {
    const hashedPassword = bcrypt.hashSync('chemistry2024', 10);
    db.data.users.push({
      id: 2,
      username: 'reanna',
      password: hashedPassword,
      role: 'student',
      created_at: new Date().toISOString()
    });
    console.log('✅ Reanna\'s account created (password: chemistry2024)');
  }

  await db.write();
  console.log('📦 Database initialized');
}

function getDb() {
  return db;
}

function getNextId(collection) {
  const items = db.data[collection] || [];
  return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
}

module.exports = { initDatabase, getDb, getNextId };
