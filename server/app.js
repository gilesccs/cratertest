//npm start - type npm install for all dependencies
// what i did - npm install nodemon, npm install express, npm install mongoose
// set up on cloud mongodb
// import express

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

const usersRoute = require('./routes/users');


mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("DB connected");
  }
);

//middleware to let app understand JSON
app.use(express.json());

//middleware to append /user.
app.use('/users' , usersRoute);

//Middleware to use cors - if needed
// app.use(cors());

app.get("/", (req, res) => {
  res.send("First request !!!");
});


app.listen(8000, () => {
  console.log("Listening to 8000");
});
