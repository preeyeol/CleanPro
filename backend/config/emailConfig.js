const envConfig = require("./envConfig");

const EMAIL_CONFIG = {
  host: envConfig.host,
  port: envConfig.transporterPort,
  secure: false,
  auth: {
    user: envConfig.emailUser,
    pass: envConfig.emailPass,
  },
};
module.exports = EMAIL_CONFIG;

