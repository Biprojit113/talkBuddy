const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:{                        // to give a post we need the userId
        type: String,
        required : true
    },
    des:                              //description of the post
    {
        type: String,
        max : 500,
    },
   img:                                    //images of the post
   {
    type: String,
   }, 
   likes:                                              //likes of the post
   {
    type: Array,
    default: [],
   },
},
{  timestamps:true  }                             // whenever i update user it will automatically update itself
)


module.exports = mongoose.model("Posts",PostSchema);