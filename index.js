import express from "express";
import bodyParser from "body-parser";
// generating path starts here 
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url))
// generating path ends here 
const app = express();
const Port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/" , (req , res)=>{
    res.sendFile(_dirname+ "/public/index.html");
    // res.send("Hello World! from express <h1>This is heading </h1>")
});
app.post("/submit" , (req , res)=>{
    console.log(req.body);
    res.send(`<h1>Band name is ${req.body.streetname}${req.body.petname}</h1>`)
})
app.get("/about",(req , res)=>{
    res.send("<h1>Hello From About page</h1>");
})
app.get("/contact",(req , res)=>{
    res.send("<h1>Hello From Contact page</h1>");
});
app.post("/register" , (req, res)=>{
    console.log(req.body)
    res.sendStatus(200);
})
app.post("/login" , (req, res)=>{
    console.log(req.body)
    const data = req.body

    res.sendStatus(200);
})
app.put("/user/ersahii" , (req, res)=>{

    res.sendStatus(200);
})
app.patch("/user/ersahii" , (req, res)=>{
    res.sendStatus(200);
})
app.delete("/user/ersahii" , (req, res)=>{
    res.sendStatus(200);
})
app.listen(Port,()=>{
    console.log("Server started at port" ,Port);
});