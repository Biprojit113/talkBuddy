const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    Username :{
       type: String,
       require : true,
       min : 3,
       max  : 30,
       unique: true,


    },
    email :{
        type : String,
        require : true,
        max : 50,
        unique : true,
    },
    password :{
           type: String,
           require: true,
           min: 6,
    },
    profilePicture : {
        type : String,
        default : ""
    },
    coverPicture : {
        type : String,
        default:""
    },
    followers : {
        type : Array,
        default:[]
    },
    followings: {
        type: Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    description:{
        type: String,
        max : 100
    },
    From:{
        type: String,
        max : 50
    },
    Relationship:{
        type: Number,
        enum:[1,2,3],
    },
   

},
{  timestamps:true  }                             // whenever i update user it will automatically update itself
)


module.exports = mongoose.model("Users",userSchema);