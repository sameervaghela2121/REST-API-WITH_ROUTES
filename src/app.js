const express = require("express");
const Student = require("./models/students");
require("./db/conn");
const student = require("./models/students");
const app = express();
const port = process.env.PORT ||  8000;
const studentRouter = require("./routers/student");

// app.get("/",(req,res)=>{
//     res.send("HELLO ")
// })
//this is kind a middleware that gives the output into the json format
app.use(express.json());

app.use(studentRouter)


app.listen(port,()=>console.log(`Listening at port ${port}`));