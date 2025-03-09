const jwt = require("jsonwebtoken");
const dotenv=require("dotenv")
dotenv.config();

const jwtSecret=process.env.JWT_SECRET

// Middleware to authenticate and verify the JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("token auth middleware ", token);

  if (!token) {
    return res.status(403).json({ message: "Access denied, token missing!" });
  }

  try {
    // Verify the token using the same secret key
    // const decoded = jwt.verify(token, jwtSecret);
    
    // req.user = decoded; 
    // next(); 
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token expired" }); // Send specific error
        }
        return res.status(401).json({ message: "Invalid token" });
      }
  
      req.user = decoded; // Save user data
      next();
    });
  
  } catch (error) {
    console.log("error in authmiddleware Decoded token:");
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticateToken;
