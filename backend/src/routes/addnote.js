const express = require("express");
const Note = require("../../Models/noteModel");
const router = express.Router();

const authuser=require("../../middlewares/authuser");
const { response } = require("express");
module.exports = router;


router.post("/",authuser,async(req,res)=>{

    try {
        
        const {title,description}=req.body;
        
        const newNote=new Note({
            title,
            description,
            userId:req.user.id
        
        });
        
          const note=await newNote.save();
         
        res.send({success:true,payload:note});
    } catch (error) {
        res.send({success:false,payload:error});
    }
    
})