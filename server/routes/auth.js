const express = require('express');
const router = express.Router();

// Simple credentials check
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password }); // Debug log

    // Check credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      console.log('Login successful'); // Debug log
      res.json({ success: true });
    } else {
      console.log('Login failed - Invalid credentials'); // Debug log
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err); // Debug log
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 