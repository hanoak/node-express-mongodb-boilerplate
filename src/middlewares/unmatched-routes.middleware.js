import constants from "../constants/index.js";

export const unmatchedRoutesMiddleware = (req, res) => {
  const status = constants.HTTP_STATUS.NOT_FOUND;
  res.status(status).json({
    error: { code: status, message: constants.LOGS.ROUTE_ERROR },
  });
};
