import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { saveJobForUser, getSavedJobsForUser, unsaveJobForUser } from '../controllers/savedJob.controller.js';

const router = express.Router();

// Save a job
router.post('/save/:jobId', isAuthenticated, saveJobForUser);

// Get all saved jobs for a user
router.get('/saved', isAuthenticated, getSavedJobsForUser);

// Optional: Unsave a job
router.delete('/unsave/:jobId', isAuthenticated, unsaveJobForUser);

export default router;
