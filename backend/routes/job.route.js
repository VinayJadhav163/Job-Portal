import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import { saveJobForUser, getSavedJobsForUser } from "../controllers/savedJob.controller.js";

const router = express.Router();

// Job routes
router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

// Saved job routes
router.post('/save/:jobId', isAuthenticated, saveJobForUser);
router.get('/saved', isAuthenticated, getSavedJobsForUser);

export default router;
