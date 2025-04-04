const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

// Get all jobs and create a job
router.route('/')
  .get(protect, getJobs)
  .post(protect, createJob);

// Get, update, and delete a job by ID
router.route('/:id')
  .get(protect, getJobById)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

module.exports = router; 