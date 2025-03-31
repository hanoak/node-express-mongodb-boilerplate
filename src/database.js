import mongoose from "mongoose";
import config from "./config/index.js";
import PostsModel from "./models/posts.model.js";
import logger from "./logger/index.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      ...(config.NODE_ENV === "production" ? { autoIndex: false } : {}),
    });

    logger.info("Connected to MongoDB");

    // Create the collection's if it doesn't exist
    await PostsModel.init();
  } catch (err) {
    logger.error("Error while connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectToDatabase;
