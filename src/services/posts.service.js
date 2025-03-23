import { DatabaseError } from "../errors/index.js";
import PostsModel from "../models/posts.model.js";
import { LOGS } from "../constants/index.js";

const getAllposts = async () => {
  try {
    const posts = await PostsModel.find();
    return posts;
  } catch (err) {
    console.info(err);
    throw new DatabaseError(LOGS.POSTS_ERROR);
  }
};

export default {
  getAllposts,
};
