import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import config from "./config/index.js";
import connectToDatabase from "./database.js";
import { LOGS } from "./constants/index.js";
import requestHeadersMiddleware from "./middlewares/req-header.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import unmatchedRoutesMiddleware from "./middlewares/unmatched-routes.middleware.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import logger from "./logger/index.js";

import postsRouter from "./routes/posts.route.js";

try {
  const PORT = config.PORT || 5000;
  const app = express();

  // Secure HTTP headers
  app.use(helmet());

  // Enable cors
  app.use(cors({ origin: "*" }));

  // Parse json request body
  app.use(express.json());

  // Request data sanitization
  app.use(mongoSanitize());

  // Request logger
  app.use(loggerMiddleware);

  // Default request headers
  app.use(requestHeadersMiddleware);

  //Default route example
  app.get("/", (req, res) => {
    res.status(200).send({ msg: "Hello, world!" });
  });

  //Add your app's routes here
  app.use("/posts", postsRouter);

  //For unmatched route patterns
  app.use(unmatchedRoutesMiddleware);

  //Global error handler middleware
  app.use(errorMiddleware);

  (async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
      logger.info(`Serve started at port: ${PORT}`);
    });
  })();
} catch (e) {
  logger.error(LOGS.APP_ERROR);
  logger.error(e?.message);
}
