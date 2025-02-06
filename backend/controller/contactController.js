const contactService=require("../services/contactService")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


const contact= catchAsync(async(req,res)=>{

    try {
        // First save the inquiry data
        const data = await contactService(req.body);
    
        try {
          // Attempt to send email
          await sendInquiryMail(req.body);
    
          // If both operations succeed
          res.status(200).json({
            success: true,
            message: "Inquiry submitted and email sent successfully!",
            data,
          });
        } catch (emailError) {
          // If email fails but data was saved
          res.status(207).json({
            success: true,
            message: "Inquiry saved but notification email failed to send",
            data,
          });
        }
      } catch (error) {
        // If database save fails
        throw new AppError(
          "Failed to process inquiry. Please try again later.",
          500
        );
      }
    

})


module.exports=contact

