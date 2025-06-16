import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    let token;

    // 1. Log headers and cookies for debugging
    console.log("🟡 Auth Header:", req.headers.authorization);
    console.log("🟡 Cookies:", req.cookies);

    // 2. Try getting token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
      console.log("🟢 Token from Authorization Header:", token);
    }

    // 3. Fallback: Try getting token from cookies
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
      console.log("🟢 Token from Cookies:", token);
    }

    // 4. No token found at all
    if (!token) {
      console.log("🔴 No token found in headers or cookies.");
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // 5. Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("🟢 Token verified. Payload:", decode);

    // 6. Attach user info based on token
    if (decode.userId) {
      req.user = { _id: decode.userId, role: "user" };
    } else if (decode.adminId) {
      req.user = { _id: decode.adminId, role: "admin" };
    } else {
      console.log("🔴 Invalid token payload structure.");
      return res.status(401).json({
        message: "Invalid token payload",
        success: false,
      });
    }

    // 7. Pass control
    next();
  } catch (error) {
    console.error("🔴 Auth Middleware Error:", error.message);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
