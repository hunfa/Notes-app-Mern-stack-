const express = require("express");
const Note = require("../../Models/noteModel");
const router = express.Router();

const authuser=require("../../middlewares/authuser");

module.exports = router;


router.delete("/",authuser,async(req,res)=>{

    try {
        const id=req.body.id;
        
        const deletednote=await Note.findByIdAndDelete({_id:id});
        res.send({success:true,payload:deletednote});
    } catch (error) {
        res.send({success:false,payload:error});
    }

    
})