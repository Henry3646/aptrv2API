const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    position: {
      type: String,
      required: [true, 'Job position is required'],
      trim: true
    },
    jobUrl: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    location: {
      type: String,
      trim: true
    },
    salary: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      required: true,
      enum: ['Applied', 'Interview', 'Offer', 'Rejected', 'Wishlist'],
      default: 'Applied'
    },
    notes: {
      type: String
    },
    contactName: {
      type: String,
      trim: true
    },
    contactEmail: {
      type: String,
      trim: true
    },
    contactPhone: {
      type: String,
      trim: true
    },
    applicationDate: {
      type: Date,
      default: Date.now
    },
    interviewDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job; 