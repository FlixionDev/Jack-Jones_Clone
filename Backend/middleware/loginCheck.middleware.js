const jwt=require("jsonwebtoken")
require("dotenv").config()
const loginCheck=(req,res,next)=>{
    let token=req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.tokenKey, function(err, decoded) {
            if(decoded){
                req.body.userId=decoded.userId;
                next()
            }else{
                res.send({"message":"Something went wrong. Please login again"})
            }
          });
    }else{
        res.send({"message":"Please login first"})
    }
}
module.exports={
    loginCheck
}