const AppError= require("../utils/appError")

const devError = (err, res) => {
    console.log("Development Error:", err);
    return res.status(err.statusCode || 500).json({
      status: err.status || "error",
      error: err,
      message: err.message || "Internal Server Error",
      stack: err.stack,
    });
  };
  
  const prodError = (err, res) => {
    if (err.isOperational) {
      // Send operational errors to the client
      return res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message || "Something went wrong",
      });
    }
  
    // Send generic message for unknown or programming errors
    return res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  };
  
  const errorHandler = (error, req, res, next) => {
    // Fallback for undefined error objects
    if (!error) {
      error = new AppError("An unknown error occurred.");
      error.statusCode = 500;
      error.status = "error";
    }
  
    // Set default values for error properties
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";
  
    // Differentiate between environments
    if (process.env.NODE_ENV === "development") {
      console.error("Error Middleware Triggered:", error);
      devError(error, res);
    } else {
      prodError(error, res);
    }
  };
  
  module.exports = errorHandler;
  