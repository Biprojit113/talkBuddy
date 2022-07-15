const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const userSchema = require("../models/Users")
const bcrypt = require("bcrypt");

router.get("/register", (req,res,next)=>{
    const userinfo = Users({
       Username:req.body.Username,
       email : req.body.email,
       password: req.body.password,
        
    })
   const user = new Users(userinfo);
   userinfo.save()
   .then(result=> res.status(200).json(result))
   .catch(err=> res.status(500).json(err))
})
//Here i gonna use asynchronus(async) and await instead of any promise operation code cause it makes more easier to work with than others.

router.post("/register",async(req,res,next)=>{
   
    try{
        // generate a password(hashed)
        
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password, salt);
      
        
        // create new user
        const userinfo = new Users({
        Username  : req.body.Username,
        email  : req.body.email,
        password :hashedpass

    })
      //saving user data and then respond to it
    const users = await userinfo.save(); 
    res.status(200).json(users)
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});
                                                     //   login    \\   



 router.post("/login", async (req,res,next)=>{
        
    try{
        const user = await Users.findOne({email: req.body.email});                 //email part
        !user && res.status(404).json("User not found");                      //!user means if the user email not found than the status code will be 404

       const validPassword = await bcrypt.compare(req.body.password, user.password);    // password part
       !validPassword && res.status(400).json("Wrong Password");                       //if its not valid

       //If  the email and password both are correct only than user will get data or access 
       res.status(200).json(user);
    }
    catch(err){

        res.status(500).json(err);

    }
    });
    //end of login


module.exports = router;

