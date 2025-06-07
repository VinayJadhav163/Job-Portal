import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    let token;

    // 1. Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // 2. Fallback: Get token from cookies
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // 3. No token at all
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // 4. Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // 5. Assign role-based user object to request
    if (decode.userId) {
      req.user = { _id: decode.userId, role: "user" };
    } else if (decode.adminId) {
      req.user = { _id: decode.adminId, role: "admin" };
    } else {
      return res.status(401).json({
        message: "Invalid token payload",
        success: false,
      });
    }

    // 6. Pass control to next middleware
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
