const mongoose = require("mongoose");

// User schema to store user details
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
            "Please enter a valid email address"
        ]
    },
    phone: { 
        type: String, 
        required: true, 
        unique: true, 
        minlength: [10, "Phone number should be exactly 10 digits"], 
        maxlength: [10, "Phone number should be exactly 10 digits"] 
    },
    address: { type: String },
    password: { 
        type: String, 
        required: true, 
        minlength: [5, "Password should be at least 5 characters long"] 
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema); 

module.exports = User;
