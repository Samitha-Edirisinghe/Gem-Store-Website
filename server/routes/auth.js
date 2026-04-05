import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

const router = express.Router();

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('🔐 Login attempt:', { username, passwordProvided: !!password });

    if (!username || !password) {
      console.log('❌ Missing username or password');
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Get admin from database
    const [rows] = await db.query('SELECT * FROM admins WHERE username = ?', [username]);

    console.log('📊 Database query result:', {
      found: rows.length > 0,
      rowCount: rows.length,
      username: username
    });

    if (rows.length === 0) {
      console.log('❌ Admin user not found in database');
      console.log('💡 Run: node scripts/setupAdmin.js to create admin user');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const admin = rows[0];

    // Compare password
    const isValidPassword = await bcrypt.compare(password, admin.password_hash);

    console.log('🔑 Password comparison:', {
      isValid: isValidPassword,
      hashExists: !!admin.password_hash
    });

    if (!isValidPassword) {
      console.log('❌ Password does not match');
      console.log('💡 Expected password: admin123 (if using default setup)');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '24h' }
    );

    console.log('✅ Login successful for user:', username);

    res.json({
      token,
      admin: {
        id: admin.id,
        username: admin.username
      }
    });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify Token (optional - for checking if token is still valid)
router.get('/verify', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production');
    res.json({ valid: true, user: decoded });
  } catch (error) {
    res.status(403).json({ valid: false, error: 'Invalid token' });
  }
});

export default router;
