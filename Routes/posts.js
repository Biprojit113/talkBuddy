
                                      //       POSTS      \\


const express = require("express")
const Posts = require("../models/Posts")
const Users = require("../models/Users")
const router =  express.Router()

/*router.get('/',  (req,res,next)=>{
     console.log("Here will be the posts!!")
})*/

//Create a post

router.post("/",async (req,res,next)=>{
    const newPost = new Posts(req.body)
   try{
     const savePost = await newPost.save()
    res.status(200).json(savePost)
   }
   catch(err)
   {
    res.status.apply(500).json(err)
   }
})


//update a post

router.put("/:id",async(req,res,next)=>{
   
    try{
          const post = await Posts.findById(req.params.id)   ///geting the id
          if(post.userId === req.body.userId)               //finding te truth
          {
                await post.updateOne({$set:req.body})   //updating is this body
                res.status(200).json("The post has been updated!!")
          }
          else{
            res.status(403).json("You can only update your posts!!")
          }
    }
    catch(err)
    {
        req.status(500).json(err)
    }
  
})

//delete a post

router.delete("/:id", async(req,res,next)=>{
    try{
      
        const post = await Posts.findById(req.params.id)
        if(post.userId === req.body.userId)
        {
             await post.deleteOne({$set:req.body})
             res.status(200).json("your post has been deleted")
        }
        else{
            res.status(403).json("You can only delete your posts!!")
        }

    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
//like/ dislike a post
router.put("/:id/like",async (req,res,next)=>{
    try{
        const post = await Posts.findById(req.params.id)
        if(!post.likes.includes(req.body.userId))         //check this like array //if not the posts likes array doesn't have requested user then
        {
           await post.updateOne({$push: {likes: req.body.userId}})       //the update will store in requested id inside its likes array
           res.status(200).json("The post has been liked")
        }
        else
        {
            //pull will take out the like  as dislike
            await post.updateOne({$pull: {likes: req.body.userId}})      //the update will store in requested id inside its likes array
           res.status(200).json("The post has been disliked")
        }
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})


//get a post

router.get("/:id", async(req,res,next)=>{
    try{
     const post = await Posts.findById(req.params.id)
     res.status(200).json(post)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
//get timeline post

router.get("/timeline/all", async (req,res,next)=>{
    try{
         const currentUser = await Users.findById(req.body.userId)
         const userPosts = await Posts.find({userId: currentUser._id})
         // to fetch all post need to use fetch
         const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=>{
            return Posts.find({userId: friendId})  //retrun the posts one by one
            })

         )
         res.status(200).json(userPosts.concat(...friendPosts))  //will take all posts of friend and only friends
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})



module.exports = router;