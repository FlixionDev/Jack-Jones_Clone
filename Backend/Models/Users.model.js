const mongoose = require("mongoose");
const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    mob_no:Number,
    pass:{type:String,required:true},
    dob:String
})

const UserModel=mongoose.model("user",userSchema);
module.exports={
    UserModel
}