// Add all your app's constants here.

export const HTTP_TEXTS = {
  UNAUTHORIZED: "You're unauthorized to access this resource.",
  INTERNAL_ERROR:
    "Something went wrong while processing your request, please try again.",
  ROUTE_ERROR: "Sorry, the requested resource is not available.",
};

export const ERROR_CLASSES = {
  UNAUT_ERR: "UnauthorizedError",
  INTERNAL_ERR: "InternalServerError",
  VALIDATION_ERR: "ValidationError",
  DB_ERR: "DatabaseError",
  BAD_REQ_ERR: "badRequestError",
  NOTFOUND_ERR: "NotFoundError",
};

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNPROCESSABLE_REQ: 422,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  TOO_MANY_REQS: 429,
  SOMETHING_WRONG: 501,
  MOVED_PERMANENTLY: 301,
  SUPPORT_DOC: 294,
  SERVER_ERROR: 500,
};

export const LOGS = {
  APP_ERROR: "Error while starting the server.",
  ROUTE_ERROR: "Sorry, the requested resource is not available.",
};
