const express = require("express");
const Note = require("../../Models/noteModel");
const router = express.Router();

const authuser=require("../../middlewares/authuser");
const { response } = require("express");
module.exports = router;


router.put("/",authuser,async(req,res)=>{
try {
    const {id,title,description} = req.body;
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
const updatedNote=await Note.findByIdAndUpdate(id, { $set: newNote},{returnDocument: 'after'}) ;   
res.send({success:true,payload:updatedNote});
    
} catch (error) {
    res.send({success:false,payload:error});
}


})