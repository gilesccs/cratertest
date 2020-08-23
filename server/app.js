//npm start - type npm install for all dependencies
// what i did - npm install nodemon, npm install express, npm install mongoose
// set up on cloud mongodb
// import express
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./model/user");

require("dotenv/config");
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("DB connected");
  }
);
// const customMiddleWare = (req,res,next) => {
//     console.log("Request Made!");
//     next();
// }

// app.use(customMiddleWare);

//middleware to let app understand JSON
app.use(express.json());

//path, req and res
app.get("/", (req, res) => {
  res.send("First request !!!");
});

app.get("/users", (req, res) => {
  let users = ["ben", "john", "max"];
  res.send({
    users: users,
  });
});

app.post("/create_user", async (req, res) => {
  try{
    const myuser = new User(req.body);
    await myuser.save();
    res.send(myuser);
  }catch(err){
      res.send({ message: err });
  }
});

app.listen(8000, () => {
  console.log("Listening to 8000");
});
