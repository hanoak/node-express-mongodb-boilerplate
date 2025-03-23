// src/models/Authentication.ts

import { Schema, model } from "mongoose";

const postsSchema = new Schema({
  body: String,
  permalink: String,
  year: Number,
  author: String,
  title: String,
  tags: [String],
  Date: Date,
  comments: [{ body: String, email: String, author: String }],
});

const PostsModel = model("posts", postsSchema);

export default PostsModel;
