import config from "../config/index.js";
import devLogger from "./dev.logger.js";
import productionLogger from "./prod.logger.js";

let logger = null;

if (config.NODE_ENV === "development") {
  logger = devLogger();
}

if (config.NODE_ENV === "production") {
  logger = productionLogger();
}

export default logger;
