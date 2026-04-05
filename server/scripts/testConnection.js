import mysql from 'mysql2/promise';

const testConnection = async () => {
  console.log('Testing MySQL connection...\n');

  try {
    // Try to connect without database first
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });

    console.log('✅ Connected to MySQL server!\n');

    // List all databases
    const [databases] = await connection.query('SHOW DATABASES');
    console.log('Available databases:');
    databases.forEach(db => console.log(`  - ${db.Database}`));

    // Check if gemstone_legacy exists
    const hasGemstoneDB = databases.some(db => db.Database === 'gemstone_legacy');

    if (!hasGemstoneDB) {
      console.log('\n❌ Database "gemstone_legacy" does NOT exist!');
      console.log('\nCreating database...');
      await connection.query('CREATE DATABASE gemstone_legacy');
      console.log('✅ Database "gemstone_legacy" created!\n');
    } else {
      console.log('\n✅ Database "gemstone_legacy" exists\n');
    }

    await connection.end();

  } catch (error) {
    console.log('❌ Cannot connect to MySQL!');
    console.log('Error:', error.message);
    console.log('Code:', error.code);
    console.log('\nPlease verify:');
    console.log('1. MySQL is running');
    console.log('2. MySQL user is "root" with no password');
    console.log('3. MySQL is listening on localhost:3306\n');
    process.exit(1);
  }
};

testConnection();
