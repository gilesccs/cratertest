const express = require('express');
const User = require("../models/User");
const userrouter = express.Router();
//append localhost:8000/users/*** 

//Get all users
userrouter.get("/", async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.json({message:err});
  }
});

//Create new user
userrouter.post("/create_user", async (req, res) => {
  try{
    const myuser = new User(req.body);
    const savedUser = await myuser.save();
    res.json(savedUser);
  }catch(err){
    res.json({ message: err });
  }
});

//get specific user
userrouter.get("/:userId", async (req,res) => {
  try{
    const user = await User.findById(req.params.userId);
    res.json(user);
  }catch(error){
    res.json(error);
  }
});

//Delete User
userrouter.delete("/:userId", async (req,res)=>{
  try{
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
    console.log("deleted")
  }catch(error){
    res.json(error)
  }
})

//update a user details, anything except create new shop
userrouter.patch("/:userId", async (req,res)=>{
  try{
    const updatedUser = 
    await User.updateOne(
        { _id: req.params.userId },
        { $set: req.body}
        );
    res.json(updatedUser);
  }catch(error){
    res.json(error)
  }
})

//add a new shop
//Recommended to use auto-generated ID in frontend for shopID
//everytime just pass "{"shops":"new shopID"}" --> it will automatically append
userrouter.patch("/shops/:userId", async (req,res)=>{
  try{
    const updatedUser = 
    await User.updateOne(
        { _id: req.params.userId },
        { $push: {"shops":req.body.shops}},{new: true}
        );
    res.json(updatedUser);
  }catch(error){
    res.json(error)
  }
})

//delete a new shop
// pass { "shops": "shopIDthatyouwanttoremove"} 
userrouter.patch("/withdrawshops/:userId", async (req,res)=>{
  try{
    const updatedUser = 
    await User.updateOne(
        { _id: req.params.userId },
        { $pull: {"shops":req.body.shops}},{safe: true, upsert: true}
        );
    res.json(updatedUser);
  }catch(error){
    res.json(error)
  }
})

module.exports = userrouter;