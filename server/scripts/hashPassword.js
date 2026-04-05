import bcrypt from 'bcryptjs';

const password = 'admin123'; // Default password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Password:', password);
  console.log('Hash:', hash);
  console.log('\nUse this SQL to insert admin:');
  console.log(`INSERT INTO admins (username, password_hash) VALUES ('admin', '${hash}');`);
});
