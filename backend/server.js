const express=require("express")
const app=express()
const cors = require("cors");
const morgan=require("morgan")
const bodyParser=require("body-parser")
const envConfig=require("./config/envConfig")
const connectDB=require("./config/dbConfig")
const contactRoute=require("./routes/contactRoute")



//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


if (envConfig.nodeEnv === "development") {
    app.use(morgan("tiny")); //development condition
  }
  
  app.use(express.urlencoded({ extended: true }));
  

//Route
app.use("/api",contactRoute)

//database Connection
connectDB()


//Server Connection
app.listen(envConfig.port, () => {
    console.log("The server is connected to port", envConfig.port);
  });
  
  

