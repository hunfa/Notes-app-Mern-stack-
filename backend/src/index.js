const express = require('express');
const app = express();
const createuser=require("./routes/createuser");
const loginuser=require("./routes/loginuser");
const getuser=require("./routes/getuser");
const getnotes=require("./routes/getnotes");
const addnote=require("./routes/addnote");
const deletenote=require("./routes/deletenote");
const updatenote=require("./routes/updatenote");
const connectTodatabase=require("./connection");
const cors = require("cors");
const port = 5000

connectTodatabase(); //connection to database
const corsOptions = {
  //   origin: ["http://localhost:3000"],
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// api endpoint routes for User
app.use("/api/createuser",createuser);
app.use("/api/loginuser",loginuser);
app.use("/api/getuser",getuser)

// api endpoint routes for Notes
app.use("/api/getnotes",getnotes);
app.use("/api/addnote",addnote)
app.use("/api/deletenote",deletenote)
app.use("/api/updatenote",updatenote)


app.listen(port, () => {
  console.log(`Note app listening on port ${port}`)
})