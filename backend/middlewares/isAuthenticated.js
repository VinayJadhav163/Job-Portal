import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // Handle both userId and adminId in token
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
    console.log(error);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
