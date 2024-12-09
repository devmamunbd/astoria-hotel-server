import { model, Schema } from "mongoose";
// const mongoose = require('mongoose');



export const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    content: String,
    coverImg: String,
    category: String,
    author: String,
    ratting: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },

});

export const Blog = model('Blog', BlogSchema)
