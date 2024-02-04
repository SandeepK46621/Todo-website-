const mongoose= require("mongoose"); 


const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String
});

const  userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true,
    },
    name:String,
    email:String, 
    todo:[{
        title:String,
        description:String
    }]
});

const User =mongoose.model('User',userSchema);
const Todo = mongoose.model('Todo',todoSchema);
module.exports = {User, Todo}