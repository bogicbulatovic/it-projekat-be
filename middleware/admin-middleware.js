import jwt from "jsonwebtoken";

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const { role } = jwt.verify(token, "secret");
  if (role && role === "admin") return next(); // User is an admin, proceed to the next middleware or route handler

  // If not an admin, respond with a 403 Forbidden error
  res.status(403).json({
    success: false,
    message: "Access denied: Admins only.",
  });
}

export default adminMiddleware;
