const  mongoose =require ('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  title:  {type:String},
  description:{
    type:String,
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
 userId:{
    type: Schema.Types.ObjectId,
    ref:'user'
 }
 
});

module.exports=mongoose.model("note",noteSchema);