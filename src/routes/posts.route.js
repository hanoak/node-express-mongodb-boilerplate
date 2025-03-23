import { Router } from "express";
import postsController from "../controllers/posts.controller.js";

const router = Router({ mergeParams: true });

router.get("/", postsController.getAllposts);

export default router;
