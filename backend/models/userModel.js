const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['Male','Female','Other']
    },
    password: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createDate: {
        type: Date,
        default: Date.now
    }, 
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'transaction'
    }]
});

module.exports = mongoose.model("user",UserSchema);