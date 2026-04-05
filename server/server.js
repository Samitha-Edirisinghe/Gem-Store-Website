import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import gemRoutes from './routes/gems.js';
import db from './config/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gems', gemRoutes);

// Health check endpoint with database status
app.get('/api/health', async (req, res) => {
  try {
    // Test database connection
    await db.query('SELECT 1');
    res.json({ 
      status: 'Server is running',
      database: 'Connected',
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Server is running',
      database: 'Disconnected',
      error: error.message,
      timestamp: new Date().toISOString() 
    });
  }
});

// Database connection test endpoint
app.get('/api/db/test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT COUNT(*) as count FROM gems');
    const [adminRows] = await db.query('SELECT COUNT(*) as count FROM admins');
    
    res.json({
      success: true,
      message: 'Database connection successful',
      gems_count: rows[0].count,
      admins_count: adminRows[0].count,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

// Start server with database connection verification
const startServer = async () => {
  try {
    // Test database connection before starting server
    await db.query('SELECT 1');
    console.log('✅ Database connected successfully');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📁 Uploads directory: ${path.join(__dirname, '../public/uploads')}`);
      console.log(`💾 Database: ${process.env.DB_NAME || 'gemstone_legacy'}`);
      console.log(`🔗 API Health Check: http://localhost:${PORT}/api/health`);
      console.log(`🔗 DB Test: http://localhost:${PORT}/api/db/test`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    console.error('💡 Please check:');
    console.error('   - MySQL is running');
    console.error('   - Database credentials in .env file are correct');
    console.error('   - Database "gemstone_legacy" exists');
    process.exit(1);
  }
};

startServer();