import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { 
    getAdminJobs, 
    getAllJobs, 
    getJobById, 
    postJob, 
    updateJob 
} from "../controllers/job.controller.js";
import { 
    saveJobForUser, 
    getSavedJobsForUser 
} from "../controllers/savedJob.controller.js";

const router = express.Router();

// ✅ Job routes
router.post("/post", isAuthenticated, postJob);
router.get("/get", getAllJobs);
router.get("/getadminjobs", isAuthenticated, getAdminJobs);
router.get("/get/:id", isAuthenticated, getJobById);
router.put("/update/:id", isAuthenticated, updateJob); // ✅ Added update job route

// ✅ Saved job routes
router.post("/save/:jobId", isAuthenticated, saveJobForUser);
router.get("/saved", isAuthenticated, getSavedJobsForUser);

export default router;
