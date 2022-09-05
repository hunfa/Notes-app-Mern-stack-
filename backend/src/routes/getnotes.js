const express = require("express");
const Note = require("../../Models/noteModel");
const router = express.Router();

const authuser=require("../../middlewares/authuser");
const { response } = require("express");
module.exports = router;


router.get("/",authuser,async(req,res)=>{

const user=req.user;
// console.log(user.id);
const notes=await Note.find({userId:user.id});
// console.log(notes);
res.send(notes);
    
})