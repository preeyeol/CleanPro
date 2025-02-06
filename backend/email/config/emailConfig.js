const nodemailer = require("nodemailer");
const AppError = require("../../utils/appError");
const EMAIL_CONFIG = require("../../config/emailConfig");

const createTransporter = () => {
  try {
    return nodemailer.createTransport(EMAIL_CONFIG);
  } catch (error) {
    throw new AppError("Email configuration failed", 500);
  }
};

const transporter = createTransporter();

// Verify transporter connection
const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log("Email service is ready");
  } catch (error) {
    console.error("Email service configuration error:", error);
  }
};

verifyConnection();

module.exports = transporter;
