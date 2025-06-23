const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');

// Get all deals (public)
router.get('/', async (req, res) => {
  try {
    const deals = await Deal.find().sort({ createdAt: -1 });
    res.json(deals);
  } catch (err) {
    console.error('Error fetching deals:', err); // Debug log
    res.status(500).json({ message: err.message });
  }
});

// Get active deals (public)
router.get('/active', async (req, res) => {
  try {
    const deals = await Deal.find({ status: 'Active' }).sort({ createdAt: -1 });
    res.json(deals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new deal
router.post('/', async (req, res) => {
  console.log('Create Deal Request Body:', req.body); // Debug log
  try {
    const deal = new Deal(req.body);
    const savedDeal = await deal.save();
    res.status(201).json(savedDeal);
  } catch (err) {
    console.error('Error creating deal:', err); // Debug log
    res.status(400).json({ message: err.message });
  }
});

// Update a deal
router.put('/:id', async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    
    res.json(deal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a deal
router.delete('/:id', async (req, res) => {
  try {
    const deal = await Deal.findByIdAndDelete(req.params.id);
    
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    
    res.json({ message: 'Deal deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 