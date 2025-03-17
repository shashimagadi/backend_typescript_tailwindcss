

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./models/SyncDb'); 





dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "http://localhost:3000", // Allow only your frontend origin
      credentials: true, // Allow cookies & authorization headers
    })
  );
let port=process.env.PORT || 6002;

app.listen(port, async()=>{
    console.log(`server running in ${port}`);
    await connect();
});
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "User details fetched successfully!" });
});


app.use('/start',(req,res)=>{
  console.log("print   yyyyy");
  
  res.send("success")
})
const authenticateToken = require('./utils/middlewares/verifyToken');

const userRoutes=require("./routes/userRoutes");
app.use("/userRoutes", userRoutes);

const userDetails=require("./routes/userDetailsRoutes");
 app.use("/userDetails",authenticateToken, userDetails)


const emailRoutes=require("./routes/emialRoutes");
app.use("/emailRoutes", emailRoutes)

