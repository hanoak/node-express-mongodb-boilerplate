import { AppError } from "../errors/index.js";

const errorMiddleware = (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars
  next,
) => {
  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json({ error: { code: err.statusCode, message: err.message } });
  } else {
    // Log the error
    console.error(err.stack);
    res
      .status(500)
      .json({ error: { code: 500, message: "Internal Server Error" } });
  }
};

export default errorMiddleware;
