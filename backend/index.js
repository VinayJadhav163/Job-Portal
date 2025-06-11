// index.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import savedJobRoute from "./routes/savedJob.route.js";

// Config
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Simplified CORS setup for same-origin deployment
app.use(
  cors({
    origin: true,          // Allow any origin (safe if frontend is served by same Express server)
    credentials: true,     // Needed for cookies/session auth
  })
);

const PORT = process.env.PORT || 3000;

// ✅ RESTful route setup
app.use("/api/v1/users", userRoute);
app.use("/api/v1/companies", companyRoute);
app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/applications", applicationRoute);
app.use("/api/v1/savedjobs", savedJobRoute);

// ✅ Serve frontend static build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ✅ Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running at port ${PORT}`);
});
