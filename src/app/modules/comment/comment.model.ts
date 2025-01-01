import { model, Schema } from "mongoose";
const mongoose = require('mongoose');

export const commentSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        require: true
    },
    createdAd: {
        type: Date,
        default: Date.now
    }
})


export const Comment = model('Comment', commentSchema)
