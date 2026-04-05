# ✅ Setup Checklist - Step by Step

Follow this checklist to ensure everything is set up correctly.

---

## Pre-Installation Checklist

- [ ] **Node.js installed** (v18 or higher)
  - Test: Open terminal and run `node --version`
  - Should show: v18.x.x or higher
  - If not: Download from https://nodejs.org/

- [ ] **MySQL installed** (v8.0 or higher)
  - Test: Run `mysql --version`
  - Should show: mysql Ver 8.0.x or higher
  - If not: Download from https://dev.mysql.com/downloads/mysql/

- [ ] **MySQL server running**
  - Test: Run `mysql -u root -p` and press Enter
  - Should: Ask for password or connect
  - If not: Start MySQL service

---

## Installation Checklist

### ✅ Step 1: Install Dependencies
- [ ] Open terminal in project folder
- [ ] Run: `npm install`
- [ ] Wait for completion (2-3 minutes)
- [ ] No error messages

### ✅ Step 2: Set Up Database
- [ ] MySQL server is running
- [ ] Run: `mysql -u root -p`
- [ ] Enter your MySQL password (or just press Enter)
- [ ] Run: `source database/setup.sql`
- [ ] See success message
- [ ] Run: `exit`

**Verify Database:**
- [ ] Run: `mysql -u root -p`
- [ ] Run: `USE gemstone_legacy;`
- [ ] Run: `SHOW TABLES;`
- [ ] See two tables: `admins` and `gems`
- [ ] Run: `SELECT * FROM admins;`
- [ ] See admin user with username 'admin'
- [ ] Run: `exit`

### ✅ Step 3: Configure Environment
- [ ] Open `.env` file
- [ ] Check `DB_PASSWORD=` line
- [ ] If you have MySQL password: Add it after `=`
- [ ] If no password: Leave it empty (already correct)
- [ ] Save file

### ✅ Step 4: Start Backend Server
- [ ] Open terminal in project folder
- [ ] Run: `npm run server`
- [ ] See: ✅ Database connected successfully
- [ ] See: 🚀 Server running on http://localhost:5000
- [ ] **KEEP THIS TERMINAL OPEN**

**Test Backend:**
- [ ] Open browser
- [ ] Go to: `http://localhost:5000/api/health`
- [ ] See JSON response with status "Server is running"

### ✅ Step 5: Start Frontend
- [ ] **Open NEW terminal window** (don't close server terminal!)
- [ ] Navigate to project folder
- [ ] Run: `npm run dev`
- [ ] See: Local: http://localhost:5173/
- [ ] **KEEP THIS TERMINAL OPEN TOO**

### ✅ Step 6: Access Customer Website
- [ ] Open browser
- [ ] Go to: `http://localhost:5173`
- [ ] See luxury gemstone homepage
- [ ] Navigation menu shows: Home, About, Precious Gems, Rare Stones, Custom Collection, Contact
- [ ] Page loads without errors

### ✅ Step 7: Access Admin Panel
- [ ] Open browser
- [ ] Go to: `http://localhost:5173/admin/login`
- [ ] See login form
- [ ] Enter username: `admin`
- [ ] Enter password: `admin123`
- [ ] Click "Sign In"
- [ ] See admin dashboard

### ✅ Step 8: Test Admin Functions

**Add Gem:**
- [ ] Click "Add Gem" button
- [ ] Fill in form:
  - Name: Test Sapphire
  - Category: Precious Gems
  - Carat: 5.0 Carats
  - Origin: Test Location
  - Price: $50,000
- [ ] Upload an image (any JPG/PNG)
- [ ] Click "Create Gem"
- [ ] See success message
- [ ] Redirected to dashboard
- [ ] See your gem in the list

**View on Customer Site:**
- [ ] Open new tab: `http://localhost:5173`
- [ ] Click "Precious Gems" in menu
- [ ] See your "Test Sapphire"
- [ ] Click on it
- [ ] See full details page

**Edit Gem:**
- [ ] Go back to admin dashboard
- [ ] Click pencil icon next to your gem
- [ ] Change price to $55,000
- [ ] Click "Update Gem"
- [ ] See success message
- [ ] Check customer site - price updated

**Delete Gem:**
- [ ] In admin dashboard, click trash icon
- [ ] Confirm deletion
- [ ] See success message
- [ ] Gem removed from list

---

## Troubleshooting Checklist

### Problem: "Database connection failed"
- [ ] MySQL is running: `mysql -u root -p`
- [ ] Database exists: `SHOW DATABASES;` (should see gemstone_legacy)
- [ ] Password in `.env` is correct
- [ ] Restart backend server

### Problem: "Port 5000 already in use"
- [ ] Change PORT in `.env` to 5001
- [ ] Restart backend server
- [ ] Backend should now run on port 5001

### Problem: "Cannot find module"
- [ ] Delete node_modules: `rm -rf node_modules`
- [ ] Delete package-lock.json: `rm package-lock.json`
- [ ] Run: `npm install`
- [ ] Try again

### Problem: "Login not working"
- [ ] Clear browser cache
- [ ] Try default credentials: admin / admin123
- [ ] Check browser console (F12) for errors
- [ ] Check backend terminal for errors

### Problem: "Images not uploading"
- [ ] Check if `public/uploads/` folder exists
- [ ] Create manually: `mkdir -p public/uploads`
- [ ] Image must be under 5MB
- [ ] Image must be JPG, PNG, or WebP

---

## Final Verification Checklist

### Both Servers Running
- [ ] Backend terminal shows: "Database connected successfully"
- [ ] Frontend terminal shows: "Local: http://localhost:5173/"
- [ ] Both terminals are still open

### Website Works
- [ ] Customer site loads: http://localhost:5173
- [ ] All pages accessible (Home, About, Categories, Contact)
- [ ] No console errors (F12 to check)

### Admin Panel Works
- [ ] Login page loads: http://localhost:5173/admin/login
- [ ] Can login with admin/admin123
- [ ] Dashboard shows
- [ ] Can add gem
- [ ] Can edit gem
- [ ] Can delete gem

### Database Integration Works
- [ ] Gems added in admin show on customer site
- [ ] Edits appear immediately
- [ ] Deletes remove gems
- [ ] Images upload and display

---

## Success! ✅

If all items are checked, your application is fully working!

### What You Have Now:
✅ Full-stack luxury gemstone e-commerce website
✅ MySQL database with persistent storage
✅ Admin panel with authentication
✅ Image upload functionality
✅ Responsive design (mobile, tablet, desktop)
✅ Beautiful UI with Playfair Display font

### Next Steps:
1. Add your real gemstone data
2. Upload professional images
3. Customize content (About, Contact)
4. Test on mobile devices
5. Change admin password for security

---

## Daily Usage Checklist

**To Start Working:**
- [ ] Start MySQL (if not auto-start)
- [ ] Terminal 1: `npm run server`
- [ ] Terminal 2: `npm run dev`
- [ ] Browser: http://localhost:5173

**To Stop:**
- [ ] Terminal 1: Press Ctrl+C
- [ ] Terminal 2: Press Ctrl+C
- [ ] (Optional) Stop MySQL service

---

## Quick Test Commands

```bash
# Test Node.js
node --version

# Test MySQL
mysql --version

# Test MySQL connection
mysql -u root -p

# Test backend API
curl http://localhost:5000/api/health

# Install dependencies
npm install

# Start backend
npm run server

# Start frontend (new terminal)
npm run dev
```

---

**If all checkboxes are checked, you're ready to go! 🚀💎**
