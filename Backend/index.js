const express=require("express");
const app=express();
const {connection}=require("./Configs/db")
const {productRouter}=require("./Routes/Product.Routes")
const {userRouter}=require("./Routes/Users.Routes")
const cors=require("cors")
require("dotenv").config();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("Something went wrong");
        console.log(err);
    }
    console.log(`Server is running on port number ${process.env.port}`)
})