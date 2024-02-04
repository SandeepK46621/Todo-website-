
const mongoose = require("mongoose")
const {Jwtmaker, Jwtverify}= require("../authentication/auth")
const {User}= require("../db/schema")

const findUser= async (userName)=>{
    try{
        var response= await User.findOne({username:userName});
        return response;
    }catch(error){
        console.error(error);
    }
}
function registeration(req,res,next){
    var {username,password,name,email}= req.body;
    findUser(username).then(obj=>{
        if(obj){
            res.status(400).json({message:"Username Already exists"});
        }else{
            next();
        }
    })
    
}
const userIdentify= async(req,res, next)=>{
    console.log(req.headers)
    try{
        const r = await User.findOne({username:req.headers.username,password:req.headers.password});
        if(r){
            next();
        }else{
            res.status(400).json({message:"username or password is wrong"});
        }
    }catch(error){
        console.error(error);
        res.status(400).json({message:"Database error"});
    }
} 

const verifyHeader= (req,res,next)=>{
    const token = req.headers.authorization;

    const val =Jwtverify(token);
  
    if(val.hasOwnProperty("message")){
        res.status(400).json({message:"token expire"});
    }else{
        req.headers.username=val.username;
        req.headers.password=val.password;
        next();
    }

}


module.exports= {registeration , userIdentify ,verifyHeader};