import { HTTP_STATUS, LOGS } from "../constants/index.js";

const unmatchedRoutesMiddleware = (req, res) => {
  const status = HTTP_STATUS.NOT_FOUND;
  res.status(status).json({
    error: { code: status, message: LOGS.ROUTE_ERROR },
  });
};

export default unmatchedRoutesMiddleware;
