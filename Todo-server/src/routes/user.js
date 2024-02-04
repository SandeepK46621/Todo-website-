const express = require("express");
const router= express.Router();
const {User,Todo}= require("../db/schema")
const {registeration , userIdentify ,verifyHeader}= require("../midleware/midleware ")
const {Jwtmaker, Jwtverify}= require("../authentication/auth")




router.post("/register",registeration,async (req,res)=>{
    console.log("Hit register");
    var usr = new User({
        username:req.body.username,
        password:req.body.password,
        name:req.body.name,
        email:req.body.email,
        todo:[]
    });
    
    await usr.save();
    res.json({message:"registered Sucessfully"});


})

router.post("/login",userIdentify,(req ,res)=>{
    var token = Jwtmaker({username:req.headers.username,password:req.headers.password});
    console.log("hit_login");
    res.json({Autherization:token});
})

router.put("/todo/add",verifyHeader,async (req, res)=>{
    const {title, description }=req.body;
    try{
        const usr= await User.findOne({username:req.headers.username,password:req.headers.password});
        
        if(!usr){
            res.status(400).json({message:"something went wrong"});
        }else{
            var newTodo= {
                title:title,
                description:description
            }
            usr.todo.push(newTodo);
            await usr.save();
            res.json({message:"todo added"});
        }
    }catch(error){
        console.error(error); 
        res.status(400).json({message:"Something went wrong with Databases"});
    }
});


router.delete("/todo/delete/:id",verifyHeader,async(req,res)=>{
    try{
        const usr= await User.findOne({username:req.headers.username,password:req.headers.password});
        if(!usr){
            res.status(400).json({message:"something went wrong"});
        }else{
           
            const idx = usr.todo.findIndex(findtodo=> findtodo._id== req.params.id);
            if(idx ===-1){
                res.status(400).json({message:"something went wrong index -1"});
            }
            usr.todo.splice(idx,1);
            await usr.save();
            res.json({message:"deleted sucessfully"});
            
        }
    }catch(error){
        console.error(error);
        res.status(400).json({message:"internal eror inside delete"});
    }
})

router.get("/todos/",verifyHeader,async (req,res)=>{
    try{
        const usr= await User.findOne({username:req.headers.username,password:req.headers.password});
        if(!usr){
            res.status(400).json({message:"Something went wrong"});
        }
       
        res.json(usr);
    }catch(error){
        console.error(error);
        res.status(400).json({message:"error ocurr in get /todos/"})
    }
})

router.get("/me",verifyHeader,(req,res)=>{
    res.json({message:"token valid"});
})

module.exports = router;