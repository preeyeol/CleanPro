class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode || 500; // Default to 500 if no status code is provided
      this.status = statusCode < 400 ? "success" : "fail"; // Set status based on statusCode
      this.isOperational = true; // Mark the error as operational
      Error.captureStackTrace(this, this.constructor); // Capture the stack trace
    }
  }
  
  module.exports = AppError;
  