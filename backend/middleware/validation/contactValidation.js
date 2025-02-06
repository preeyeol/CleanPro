const { body } = require("express-validator");

const validateContact = () => {
  return [
    body("fullName")
      .notEmpty()
      .withMessage("Field is required")
      .isLength({ min: 3, max: 20 })
      .withMessage("Full Name must be between 3-20 letters"),
      body("email")
      .notEmpty()
      .withMessage("Field is required")
      .isEmail()
      .withMessage("Provide a valid email address"),
    body("mobileNumber")
      .notEmpty()
      .withMessage("Field is required")
      .isLength({ min: 7, max: 10 })
      .withMessage("Mobile Number must be between 7-10 digits")
      .trim(),
    
    body("messageForUs")
      .notEmpty()
      .withMessage("Field is required")
      .isLength({ min: 5, max: 100 })
      .withMessage("Message must be between 5-100 letters"),
  ];
};

module.exports = validateContact;
