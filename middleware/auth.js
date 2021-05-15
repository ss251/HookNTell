const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token provided, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, config.get("jwtSecret"), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token invalid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("error: auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
