const contactSchema=require("../model/contact")

const contactService = async (userData) => {
    const user = await contactSchema(userData);
  
    const contactInfo = await user.save();
    return contactInfo;
  };
  
  module.exports = contactService;
  
  