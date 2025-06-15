const mongoose = require('mongoose');
// const MONGODB_URI = require('./development.json')

mongoose
    .connect("mongodb://127.0.0.1:27017/skytm")
    .then(()=>{
        console.log("connected");
    })
    .catch((err) => {
        console.log("Error connecting database:", err.message)
    })

module.exports = mongoose.connection;