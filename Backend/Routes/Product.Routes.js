const express=require("express");
const productRouter=express.Router();
const {AccessoriesProductModel, ClothingsProductModel, FootwearsProductModel, InnerwearsProductModel, KidsProductModel, LoungewearsProductModel, New_inProductModel, SalesProductModel} =require("../Models/Products.model");
productRouter.get("/accessories",async (req,res)=>{
    try{
        let data =await AccessoriesProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/accessories/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await AccessoriesProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/clothings",async (req,res)=>{
    try{
        let data =await ClothingsProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/clothings/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await ClothingsProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/footwears",async (req,res)=>{
    try{
        let data =await FootwearsProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/footwears/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await FootwearsProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/innerwears",async (req,res)=>{
    try{
        let data =await InnerwearsProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/innerwears/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await InnerwearsProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/kids",async (req,res)=>{
    try{
        let data =await KidsProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/kids/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await KidsProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/loungewears",async (req,res)=>{
    try{
        let data =await LoungewearsProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/loungewears/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await LoungewearsProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/new_ins",async (req,res)=>{
    try{
        let data =await New_inProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/new_ins/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await New_inProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})

productRouter.get("/sales",async (req,res)=>{
    try{
        let data =await SalesProductModel.find();
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})
productRouter.get("/sales/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        let data =await SalesProductModel.find({"_id":id});
        res.send(data)
    }catch(err){
        console.log(err);
        res.send({"error":err})
    }
})


module.exports={
    productRouter
}