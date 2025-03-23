import postsService from "../services/posts.service.js";
import { HTTP_STATUS } from "../constants/index.js";

const getAllposts = async (req, res) => {
  const posts = await postsService.getAllposts();
  res.status(HTTP_STATUS.OK).json({ posts });
};

export default {
  getAllposts,
};
