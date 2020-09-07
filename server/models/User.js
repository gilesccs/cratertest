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
        minlength: 3,
        maxlength: 15,
    },
    password: {
        type: String,
        required:true,
        minlength: 3,
        maxlength: 12,
    },
    bio: {
        type: String,
        default: "Hi, i am a new user!",
    },
    shops: {
        type: [String],
    }
});

//const MyModel = mongoose.model('ModelName', mySchema);
module.exports = mongoose.model(
    "User", User
);