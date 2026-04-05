import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { authenticateToken } from '../middleware/auth.js';
import db from '../config/db.js';
import fs from 'fs';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../public/uploads');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'gem-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (jpeg, jpg, png, webp)'));
    }
  }
});

// Get all gems (PUBLIC)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = 'SELECT * FROM gems ORDER BY created_at DESC';
    let params = [];

    if (category) {
      query = 'SELECT * FROM gems WHERE category = ? ORDER BY created_at DESC';
      params = [category];
    }

    const [rows] = await db.query(query, params);
    
    // Parse JSON fields
    const gems = rows.map(gem => ({
      ...gem,
      specifications: gem.specifications ? JSON.parse(gem.specifications) : [],
      highlights: gem.highlights ? JSON.parse(gem.highlights) : []
    }));

    res.json(gems);
  } catch (error) {
    console.error('Error fetching gems:', error);
    res.status(500).json({ error: 'Failed to fetch gems' });
  }
});

// Get single gem by ID (PUBLIC)
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM gems WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Gem not found' });
    }

    const gem = {
      ...rows[0],
      specifications: rows[0].specifications ? JSON.parse(rows[0].specifications) : [],
      highlights: rows[0].highlights ? JSON.parse(rows[0].highlights) : []
    };

    res.json(gem);
  } catch (error) {
    console.error('Error fetching gem:', error);
    res.status(500).json({ error: 'Failed to fetch gem' });
  }
});

// Create new gem (ADMIN ONLY)
router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      category,
      carat,
      origin,
      clarity,
      price,
      cut,
      treatment,
      certification,
      description,
      specifications,
      highlights
    } = req.body;

    // Validate required fields
    if (!name || !category || !carat || !origin || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const query = `
      INSERT INTO gems (
        name, category, carat, origin, clarity, price, cut, treatment, 
        certification, image_url, description, specifications, highlights
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
      name,
      category,
      carat,
      origin,
      clarity || null,
      price,
      cut || null,
      treatment || null,
      certification || null,
      imageUrl,
      description || null,
      specifications || null,
      highlights || null
    ]);

    res.status(201).json({
      message: 'Gem created successfully',
      gemId: result.insertId,
      imageUrl
    });
  } catch (error) {
    console.error('Error creating gem:', error);
    res.status(500).json({ error: 'Failed to create gem' });
  }
});

// Update gem (ADMIN ONLY)
router.put('/:id', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      category,
      carat,
      origin,
      clarity,
      price,
      cut,
      treatment,
      certification,
      description,
      specifications,
      highlights
    } = req.body;

    // Check if gem exists
    const [existing] = await db.query('SELECT * FROM gems WHERE id = ?', [req.params.id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Gem not found' });
    }

    let imageUrl = existing[0].image_url;

    // If new image uploaded, delete old and use new
    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, '../../public', existing[0].image_url);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const query = `
      UPDATE gems SET
        name = ?, category = ?, carat = ?, origin = ?, clarity = ?,
        price = ?, cut = ?, treatment = ?, certification = ?,
        image_url = ?, description = ?, specifications = ?, highlights = ?
      WHERE id = ?
    `;

    await db.query(query, [
      name || existing[0].name,
      category || existing[0].category,
      carat || existing[0].carat,
      origin || existing[0].origin,
      clarity || existing[0].clarity,
      price || existing[0].price,
      cut || existing[0].cut,
      treatment || existing[0].treatment,
      certification || existing[0].certification,
      imageUrl,
      description || existing[0].description,
      specifications || existing[0].specifications,
      highlights || existing[0].highlights,
      req.params.id
    ]);

    res.json({ message: 'Gem updated successfully', imageUrl });
  } catch (error) {
    console.error('Error updating gem:', error);
    res.status(500).json({ error: 'Failed to update gem' });
  }
});

// Delete gem (ADMIN ONLY)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    // Get gem to delete image file
    const [rows] = await db.query('SELECT image_url FROM gems WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Gem not found' });
    }

    // Delete image file
    const imagePath = path.join(__dirname, '../../public', rows[0].image_url);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete from database
    await db.query('DELETE FROM gems WHERE id = ?', [req.params.id]);

    res.json({ message: 'Gem deleted successfully' });
  } catch (error) {
    console.error('Error deleting gem:', error);
    res.status(500).json({ error: 'Failed to delete gem' });
  }
});

export default router;
