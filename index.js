import express from "express";
const app = express();
const Port = 3000;
app.get("/" , (req , res)=>{
    res.send("Hello World! from express ")
    // console.log('Hello World!');
});
app.listen(Port,()=>{
    console.log("Server started at port" ,Port);
});