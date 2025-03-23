import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "./config/index.js";
import { LOGS } from "./constants/index.js";
import { requestHeadersMiddleware } from "./middlewares/req-header.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import { unmatchedRoutesMiddleware } from "./middlewares/unmatched-routes.middleware.js";

try {
  const PORT = config.PORT || 5000;
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: "*" }));
  app.use(express.json());

  app.use(requestHeadersMiddleware);

  app.get("/", (req, res) => {
    res.status(200).send({ msg: "Hello, world!" });
  });

  //Add your app's routes here

  //For unmatched route patterns
  app.use(unmatchedRoutesMiddleware);

  //Global error handler middleware
  app.use(errorMiddleware);

  app.listen(PORT, () => {
    console.info(`Serve started at port: ${PORT}`);
  });
} catch (e) {
  console.error(LOGS.APP_ERROR);
  console.error(e);
}
