const express=require("express");
const addressRouter=express.Router();
const {AddressModel}=require("../Models/Address.model")
addressRouter.get("/",async(req,res)=>{
    const {userId}=req.body;
    try{
        let addressData=await AddressModel.find({userId});
        res.send(addressData)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

addressRouter.post("/",async(req,res)=>{
    try{
        let toSaveAdd=new AddressModel(req.body);
        await toSaveAdd.save();
        res.send({"message":"Address save to database"})
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

module.exports={
    addressRouter
}