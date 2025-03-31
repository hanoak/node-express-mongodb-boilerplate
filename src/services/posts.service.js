import { DatabaseError, NotFoundError } from "../errors/index.js";
import PostsModel from "../models/posts.model.js";
import { LOGS } from "../constants/index.js";
import { AppError } from "../errors/index.js";
import logger from "../logger/index.js";

const getAllposts = async () => {
  try {
    const posts = await PostsModel.find();
    return posts;
  } catch (err) {
    logger.error(err);
    throw new DatabaseError(LOGS.POSTS_ERROR);
  }
};

const getLatestPosts = async () => {
  try {
    let results = await PostsModel.aggregate([
      { $project: { author: 1, title: 1, tags: 1, date: 1 } },
      { $sort: { date: -1 } },
      { $limit: 3 },
    ]);
    return results;
  } catch (err) {
    logger.error(err);
    throw new DatabaseError(LOGS.POSTS_ERROR);
  }
};

const getPostById = async (id) => {
  try {
    let result = await PostsModel.findById(id);

    if (!result) throw new NotFoundError();

    return result;
  } catch (err) {
    logger.error(err);
    if (err instanceof AppError) throw err;

    throw new DatabaseError(LOGS.POSTS_ERROR);
  }
};

const addPost = async (post) => {
  try {
    const result = await PostsModel.insertOne({ ...post, date: new Date() });
    return result;
  } catch (err) {
    logger.error(err);
    throw new DatabaseError(LOGS.ADD_POST_ERROR);
  }
};

const deletePost = async (id) => {
  try {
    await PostsModel.findByIdAndDelete(id);
    return LOGS.POST_DELETED;
  } catch (err) {
    logger.error(err);
    throw new DatabaseError(LOGS.DELETE_POST_ERROR);
  }
};

export default {
  getAllposts,
  getLatestPosts,
  getPostById,
  addPost,
  deletePost,
};
