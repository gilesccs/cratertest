
//npm start - type npm install for all dependencies
// what i did - npm install nodemon, npm install express
// import express 
const express = require("express");
const app = express();

// const customMiddleWare = (req,res,next) => {
//     console.log("Request Made!");
//     next();
// }

// app.use(customMiddleWare);

//middleware to let app understand JSON
app.use(express.json());

//path, req and res
app.get("/", (req, res) => {
    res.send("First request !!!")
});

app.get("/users", (req, res) => {
    let users = ["ben","john","max"]
    res.send({
        users:users,
    })
});

app.post("/create_user", (req, res) => {
    console.log(req.body);
    res.send(`Created your user ${req.body.name}`);
});

app.listen(8000, ()=>{
    console.log("Listening to 8000");
});