
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet  =  require("helmet");
const { json } = require("express/lib/response");
const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Authentication");
const PostRoutes = require("./Routes/posts");   //adding post routes to the application



const app = express();
dotenv.config();                     


app.listen(8080,()=>{                                                         //creating and listening to a server
    console.log("Backend Server is running!");
});


//{useNewUrlParser:true},
mongoose.connect(process.env.MONGO_URL,()=>{                                   //connecting to the MongoDB
     console.log("Connected to MongoDB");
});

//express middleware

app.use(express.json());                                             // for parser requests
app.use(helmet());                                                    //to justify the reqquests
app.use(morgan("common"));                                       // to know the actual details of a request
app.use ("/api/Users",userRoutes);                           //path  to that plugins
app.use ("/api/Auth",authRoutes);
app.use ("/api/Posts",PostRoutes);



app.get('/',(req,res, next)=>{
    res.status(200).json({
       message: "Hello There!!"
    })
});
app.get('/user',(req,res,next)=>{
    res.status(200).json({
        message:"Welcome to this place!!"
    });
});

