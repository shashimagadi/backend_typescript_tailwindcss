const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("REQ BODY ", req.body);
        

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            console.log("user already exist");
            
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "success", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log("invaild user");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("invaild password");
            return res.status(400).json({ message: "Invalid credentials" });
        }

       

        const token = jwt.sign(
            { userId: user._id, email: user.Email },
            process.env.JWT_SECRET, 
            { expiresIn: "50m" } 
          );
         
      
          res.status(200).json({
            message: "success",
            token, 
            user
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { register, login };