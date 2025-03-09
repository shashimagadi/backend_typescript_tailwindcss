// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
const Sequelize=require('sequelize')
const dotenv=require("dotenv")

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "",
    dialect: "mysql",
    logging: false, // Set to true if you want to see raw SQL logs
    timezone: "+05:30", 
  dialectOptions: {
    timezone: "+05:30",
  },
  }
);

module.exports = sequelize;