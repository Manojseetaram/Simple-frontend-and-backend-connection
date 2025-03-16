import express from "express";
import { UserModel } from "../config/db";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
const user = express.Router();


user.post("/signup",async(req:any, res:any)=>{
    try{
  const {username ,email,password} = req.body;
  console.log("Username recived :" , username)
  const existUser = await UserModel.findOne({username})
  if(existUser){
    res.status(400).json({
        message : "Username allready taken"
    })
  }
  const hashedPassword = await bcrypt.hash(password,10)
   await UserModel.create({username,email,password : hashedPassword});
  res.status(201).json({
    message : "signup successfully"
  })
}catch(e){
    res.status(500).json({
        message : "Internal server error"
    })
    console.log("Signuperror" ,e)
}
})

export default user;