const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['equity', 'debt', 'preipo', 'bridge', 'convertible', 'seed', 'venturedebt', 'buyout', 'ipo']
  },
  status: {
    type: String,
    required: true,
    enum: ['New', 'Active', 'Closing Soon'],
    default: 'New'
  },
  deadline: {
    type: Date,
    required: true
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  highlights: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
dealSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Deal', dealSchema); 