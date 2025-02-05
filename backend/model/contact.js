const mongoose=require("mongoose")

const contact=mongoose.Schema({
fullName: { type: String, require: true },
    email: {
      type: String,
      required: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address.", // Error message for invalid emails
      ],
    },
    mobileNumber: {
        type: String,
        required: true,
        match: /^[0-9]{7,10}$/, // 7-10 digit validation
      },
      messageForUs: { type: String ,required:true},
    
})


const contactSchema= mongoose.model("contact",contact)

module.exports= contactSchema