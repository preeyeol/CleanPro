require("dotenv").config();

const envConfig = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URL,
    emailPass: process.env.EMAIL_PASS,
    emailUser: process.env.EMAIL_USER,
    host: process.env.HOST,
    transporterPort: process.env.TRANSPORT,
    nodeEnv: process.env.NODE_ENV,

  };
  
  module.exports = envConfig;
  