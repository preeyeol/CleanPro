const express=require("express")
const app=express()
const envConfig=require("./config/envConfig")
const connectDB=require("./config/dbConfig")



//database Connection
connectDB()


//Server Connection
app.listen(envConfig.port, () => {
    console.log("The server is connected to port", envConfig.port);
  });
  
  

