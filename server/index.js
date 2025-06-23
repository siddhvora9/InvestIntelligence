const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const dealRoutes = require('./routes/deals');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Updated for production
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/investintelligence')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;
    
    // Basic validation
    if (!name || !email || !company || !service || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please enter a valid email address' 
      });
    }

    // For now, just log the contact submission
    // In production, you'd save this to a database
    console.log('Contact form submission:', {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: Date.now() // Temporary ID
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      message: 'Failed to submit contact form' 
    });
  }
});

// Get all contact submissions (could be protected in production)
app.get('/api/contact', async (req, res) => {
  try {
    // For now, return empty array since we're not storing contacts yet
    // In production, you'd fetch from database
    res.status(200).json([]);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      message: 'Failed to fetch contact submissions' 
    });
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/deals', dealRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 