import SavedJob from '../models/SavedJob.model.js'; // Your SavedJob mongoose model
import Job from '../models/job.model.js'; // Your Job mongoose model

// Save a job for the logged-in user
export const saveJobForUser = async (req, res) => {
  try {
    const userId = req.user._id;        // From isAuthenticated middleware
    const jobId = req.params.jobId;

    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if the job is already saved by the user
    const alreadySaved = await SavedJob.findOne({ user: userId, job: jobId });
    if (alreadySaved) {
      return res.status(400).json({ message: 'Job already saved' });
    }

    // Save the job for the user
    const savedJob = new SavedJob({ user: userId, job: jobId });
    await savedJob.save();

    res.status(201).json({ message: 'Job saved successfully', savedJob });
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all saved jobs for the logged-in user
export const getSavedJobsForUser = async (req, res) => {
  try {
    const userId = req.user._id;

    const savedJobs = await SavedJob.find({ user: userId })
      .populate({
        path: 'job',
        populate: { path: 'company' } // Populate company inside job if needed
      });

    res.status(200).json({ savedJobs });
  } catch (error) {
    console.error('Error fetching saved jobs:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
