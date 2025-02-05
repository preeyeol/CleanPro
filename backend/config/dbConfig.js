const mongoose = require("mongoose");
const envConfig = require("./envConfig");

const connectDB = () => {
    mongoose
      .connect(envConfig.dbUri)
      .then(() => {
        console.log("DataBase connected successfully");
      })
      .catch((err) => {
        console.error("Database connection error:", err.message);
        process.exit(1); // Exit the application with an error status code
      });
  };
  
  module.exports = connectDB;
  