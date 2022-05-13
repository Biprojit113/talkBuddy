const express = require("express");
const router = express.Router();

router.get("/register",(req,res,next)=>{
    res.status(200).json({
        message : "Hey Its User Routes!!"
    })
    //res.send("It Worked!!")
})


module.exports = router;