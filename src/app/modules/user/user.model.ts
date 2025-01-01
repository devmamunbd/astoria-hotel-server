import { model, Schema } from "mongoose";
const bcrypt = require('bcrypt');


export const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});





export const User = model('User', userSchema)
