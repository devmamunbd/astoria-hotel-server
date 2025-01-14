import mongoose, { model, Schema } from "mongoose";

export const BlogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    content: {
        type: Object,
        require: true
    },
    coverImg: String,
    category: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    ratting: Number,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Blog = model("Blog", BlogSchema);
