const mongoose = require("mongoose");
const User = require("../db/schema")
const jwt= require("jsonwebtoken");

const secretKey = "S3CRE7"

function Jwtmaker(obj){
    const token= jwt.sign(obj,secretKey,{expiresIn:'1h'});
    var modToken= "Bearer "+token;
    return modToken;
} 

function Jwtverify(token){
    var arr= token.split(" ");
    var send;
    jwt.verify(arr[1], secretKey, (err, decoded) => {
        if (err) {
          send={message:"not valid token"};
          
        } else {

            send=decoded;
            console.log(decoded);
        }
    });

    return send;
}

module.exports ={Jwtmaker, Jwtverify};