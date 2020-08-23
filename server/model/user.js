// go to cloudmongodb to view
const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });


const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    }
});

//const MyModel = mongoose.model('ModelName', mySchema);
module.exports = mongoose.model(
    "User", User
);