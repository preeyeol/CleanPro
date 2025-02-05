const { validationResult } = require("express-validator");
const AppError = require("../../utils/appError");

const validate = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const errors = error.errors.map((obj) => {
      return obj.msg;
    });
    console.log("error", errors);
    throw new AppError(errors.join(","), 400);
  }
  next();
};

module.exports = validate;

