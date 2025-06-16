import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    let token;

    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // If not in header, try cookies
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // No token found
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // Attach user info to request
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

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
