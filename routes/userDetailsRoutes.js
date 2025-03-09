const express=require("express");
const { createUserDetails, deleteUserDetails, updateUserDetails, getUserDetails } = require("../controlllers/UserDetailsController");


const router = express.Router();
router.get("/getUserDetails", getUserDetails)

router.post("/createUserDetails",createUserDetails);

router.put("/updateUserDetails/:id",updateUserDetails);

router.delete("/deleteUserDetails/:id",deleteUserDetails);

module.exports = router;