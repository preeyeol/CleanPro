const express = require("express");
const contactRoute = express.Router();
const contact=require("../controller/contactController")
const {validate, validateContact}=require("../middleware/validation/index")


contactRoute.post("/contact", validateContact(),validate, contact)


module.exports= contactRoute