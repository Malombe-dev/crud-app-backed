const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const multer = require('multer');
const { storage } = require('./utils/cloudinary');
require('dotenv').config();

const app = express();
const upload = multer({ storage }); // Upload images to Cloudinary

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB connection (use fallback if .env not set)
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://admin:malombe@backed.u0nvukg.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=backed';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 🚀 CREATE product with image
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const image = req.file?.path;

    const product = await Product.create({ name, price, quantity, image });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 READ all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📥 READ one product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔁 UPDATE product
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ❌ DELETE product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
