import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const checkMySQL = async () => {
  console.log('🔍 Checking MySQL connection...\n');
  console.log('Configuration:');
  console.log(`  Host: ${process.env.DB_HOST || 'localhost'}`);
  console.log(`  User: ${process.env.DB_USER || 'root'}`);
  console.log(`  Database: ${process.env.DB_NAME || 'gemstone_legacy'}`);
  console.log(`  Password: ${process.env.DB_PASSWORD ? '***' : '(empty)'}\n`);

  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'gemstone_legacy'
    });

    console.log('✅ MySQL is RUNNING and connection successful!\n');

    // Check if admins table exists
    const [tables] = await connection.query("SHOW TABLES LIKE 'admins'");

    if (tables.length === 0) {
      console.log('⚠️  Admin table does NOT exist');
      console.log('   Run: node scripts/setupAdmin.js\n');
    } else {
      console.log('✅ Admin table exists');

      // Check if admin user exists
      const [admins] = await connection.query('SELECT username FROM admins');

      if (admins.length === 0) {
        console.log('⚠️  No admin users found');
        console.log('   Run: node scripts/setupAdmin.js\n');
      } else {
        console.log(`✅ Found ${admins.length} admin user(s):`);
        admins.forEach(admin => console.log(`   - ${admin.username}`));
        console.log('\n📝 Try logging in with:');
        console.log('   Username: admin');
        console.log('   Password: admin123\n');
      }
    }

    await connection.end();

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ MySQL is NOT RUNNING!\n');
      console.log('To start MySQL:\n');
      console.log('Windows:');
      console.log('  net start MySQL80   (Run as Administrator)\n');
      console.log('Mac:');
      console.log('  brew services start mysql\n');
      console.log('Linux:');
      console.log('  sudo systemctl start mysql\n');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.log(`❌ Database '${process.env.DB_NAME}' does not exist!\n`);
      console.log('Create it with:');
      console.log(`  CREATE DATABASE ${process.env.DB_NAME};\n`);
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('❌ Access denied! Wrong username or password\n');
      console.log('Check your .env file credentials\n');
    } else {
      console.log('❌ Error:', error.message);
      console.log('Code:', error.code, '\n');
    }
    process.exit(1);
  }
};

checkMySQL();
