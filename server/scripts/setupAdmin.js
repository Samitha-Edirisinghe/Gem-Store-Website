import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const setupAdmin = async () => {
  let connection;

  try {
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'gemstone_legacy'
    });

    console.log('✅ Connected to database');

    // Check if admin table exists
    const [tables] = await connection.query("SHOW TABLES LIKE 'admins'");

    if (tables.length === 0) {
      console.log('❌ Admin table does not exist. Creating it...');
      await connection.query(`
        CREATE TABLE admins (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✅ Admin table created');
    }

    // Check if admin user exists
    const [rows] = await connection.query('SELECT * FROM admins WHERE username = ?', ['admin']);

    if (rows.length === 0) {
      // Create admin user
      const password = 'admin123';
      const passwordHash = await bcrypt.hash(password, 10);

      await connection.query(
        'INSERT INTO admins (username, password_hash) VALUES (?, ?)',
        ['admin', passwordHash]
      );

      console.log('✅ Admin user created successfully');
      console.log('📝 Login credentials:');
      console.log('   Username: admin');
      console.log('   Password: admin123');
    } else {
      console.log('✅ Admin user already exists');
      console.log('📝 Login credentials:');
      console.log('   Username: admin');
      console.log('   Password: admin123');

      // Update password to ensure it matches
      const password = 'admin123';
      const passwordHash = await bcrypt.hash(password, 10);

      await connection.query(
        'UPDATE admins SET password_hash = ? WHERE username = ?',
        [passwordHash, 'admin']
      );
      console.log('✅ Admin password reset to default');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

setupAdmin();
