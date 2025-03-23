import { Router } from "express";
import postsController from "../controllers/posts.controller.js";

const router = Router({ mergeParams: true });

// Get all posts
router.get("/", postsController.getAllposts);

// get the latest posts
router.get("/latest", postsController.getLatestPosts);

// Get a single post
router.get("/:id", postsController.getPostById);

// Add a new document to the collection
router.post("/", postsController.addPost);

// Delete a post
router.delete("/:id", postsController.deletePost);

export default router;
