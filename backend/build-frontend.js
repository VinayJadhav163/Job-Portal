import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to frontend folder
const frontendPath = path.join(__dirname, "../frontend");

try {
  console.log("🚧 Installing frontend dependencies...");
  execSync("npm install", { cwd: frontendPath, stdio: "inherit" });

  console.log("🏗️ Building frontend...");
  execSync("npm run build", { cwd: frontendPath, stdio: "inherit" });

  console.log("✅ Frontend built successfully");
} catch (err) {
  console.error("❌ Failed to build frontend", err);
  process.exit(1);
}
