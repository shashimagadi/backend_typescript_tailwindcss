// import sequelize from "../config/db"
// import User from "./User"
const sequelize=require("../config/db");
const User = require("./User");

const UserDetails = require("./UserDetails");



const connect = async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully!");
  
      // Sync all models
      await sequelize.sync({ alter: true }); // `alter: true` updates the table structure if needed
      console.log("All models synchronized.");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  };
  

  
  module.exports = { sequelize, User, connect,UserDetails };