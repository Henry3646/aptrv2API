const Job = require('../models/jobModel');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a job
// @route   POST /api/jobs
// @access  Private
const createJob = async (req, res) => {
  try {
    const {
      company,
      position,
      jobUrl,
      description,
      location,
      salary,
      status,
      notes,
      contactName,
      contactEmail,
      contactPhone,
      applicationDate,
      interviewDate
    } = req.body;

    const job = await Job.create({
      user: req.user._id,
      company,
      position,
      jobUrl,
      description,
      location,
      salary,
      status,
      notes,
      contactName,
      contactEmail,
      contactPhone,
      applicationDate,
      interviewDate
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get a job by ID
// @route   GET /api/jobs/:id
// @access  Private
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    // Check if job exists
    if (!job) {
      res.status(404);
      throw new Error('Job not found');
    }

    // Check if job belongs to user
    if (job.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }

    res.json(job);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Private
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    // Check if job exists
    if (!job) {
      res.status(404);
      throw new Error('Job not found');
    }

    // Check if job belongs to user
    if (job.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedJob);
  } catch (error) {
    res.status(error.status || 400).json({ message: error.message });
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Private
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    // Check if job exists
    if (!job) {
      res.status(404);
      throw new Error('Job not found');
    }

    // Check if job belongs to user
    if (job.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }

    await job.deleteOne();
    res.json({ message: 'Job removed' });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
}; 