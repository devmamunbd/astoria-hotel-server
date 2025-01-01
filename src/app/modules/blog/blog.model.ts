import { model, Schema } from "mongoose";

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
    content: String,
    coverImg: String,
    category: String,
    author: String,
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
