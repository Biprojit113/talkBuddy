
const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const router = express.Router();

//update user 

router.put("/:id",async (req,res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){    //'===' equal value and equal type
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password =  await bcrypt.hash(req.body.password,salt);
            }
            catch(err){
                return res.status(500).json(err);
    
                }
            }
        
        try{
            const user = await Users.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            })
            res.status(200).json("Account has been updated!")
        }
            catch(err){
                return res.status(500).json(err)
                
            }

        }
    
    else{
        return res.status(403).json("You are Authorized only to update your profile");

    }
    

    
})
// to delete an user 

router.delete("/:id", async (req,res,next)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin){
        try{
           const user =  await Users.findByIdAndDelete(  req.params.id)
             res.status(200).json("Account has been deleted!!!");
        }
        catch(err){
            return res.status(500).json(err);
        }
        
    }else 
    return res.status(403).json("You can delete only your profile")
})

// to get a user
router.get("/:id", async (req,res,next)=>{
    try{
        const user = await Users.findById(req.params.id)
        // to avoid unnecessary data for user
        const {password, updatedAt,createdAt, ...other} = user._doc  // user._doc carries whole object // other carries data without password and updatedat 
        res.status(200).json(other)
    }
    catch(err){
        return res.status(500).json(err)
    }
})


module.exports = router;