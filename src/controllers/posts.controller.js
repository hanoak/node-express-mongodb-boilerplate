import postsService from "../services/posts.service.js";
import { HTTP_STATUS } from "../constants/index.js";

const getAllposts = async (req, res) => {
  const posts = await postsService.getAllposts();
  res.status(HTTP_STATUS.OK).json({ posts });
};

const getLatestPosts = async (req, res) => {
  const posts = await postsService.getLatestPosts();
  res.status(HTTP_STATUS.OK).json({ posts });
};

const getPostById = async (req, res) => {
  const post = await postsService.getPostById(req?.params?.id);
  res.status(HTTP_STATUS.OK).json({ post });
};

const addPost = async (req, res) => {
  const post = await postsService.addPost(req?.body);
  res.status(HTTP_STATUS.OK).json({ post });
};

const deletePost = async (req, res) => {
  const post = await postsService.deletePost(req?.params?.id);
  res.status(HTTP_STATUS.OK).json({ post });
};

export default {
  getAllposts,
  getLatestPosts,
  getPostById,
  addPost,
  deletePost,
};
