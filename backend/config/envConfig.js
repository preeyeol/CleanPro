require("dotenv").config();

const envConfig = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URL
  };
  
  module.exports = envConfig;
  