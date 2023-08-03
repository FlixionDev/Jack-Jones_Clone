const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    addLine1:{type:String,required:true},
    addLine2:{type:String,required:true},
    postcode:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},
    userId:{type:String,required:true},
})


const AddressModel=mongoose.model("addresse",addressSchema);
module.exports={
    AddressModel
}