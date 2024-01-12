const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/Login-Signup');

connect.then (() => {
    console.log("Database is connected succesfully");
})
.catch(() => {
    console.log("Database not connected");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;