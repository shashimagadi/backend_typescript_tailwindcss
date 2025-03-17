const nodemailer =require("nodemailer");
const dotenv=require("dotenv")

dotenv.config();

const otpStorage = {};
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  
  // Generate a 6-digit OTP
  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
  
  /**
   * @desc   Send OTP to user and notify admin
   * @route  POST /api/email/send-otp
   */
   const sendOTP = async (req, res) => {
    const { email } = req.body;
    console.log("email ", email);
    
    if (!email) return res.status(400).json({ message: "Email is required" });
  
    const otp = generateOTP();
    otpStorage[email] = otp; // Store OTP temporarily
    console.log("otp ", otp);
  
    try {
      // Send OTP email to user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}`,
      });
  
      // Send admin notification
    //   await transporter.sendMail({
    //     from: process.env.SMTP_USER,
    //     to: process.env.ADMIN_EMAIL, // Your admin email
    //     subject: "New OTP Request",
    //     text: `User Email: ${email} has requested an OTP.\nGenerated OTP: ${otp}`, // Remove OTP from email in production
    //   });
  
      res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.log("email fail", error);
      res.status(500).json({ message: "Failed to send OTP", error });
    }
  };
  
  /**
   * @desc   Verify OTP
   * @route  POST /api/email/verify-otp
   */
   const verifyOTP = (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });
  
    if (otpStorage[email] === otp) {
      delete otpStorage[email]; // Remove OTP after successful verification
      return res.status(200).json({ message: "OTP verified successfully" });
    }
  
    res.status(400).json({ message: "Invalid OTP" });
  };

module.exports={sendOTP, verifyOTP}