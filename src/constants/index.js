// Add all your app's constants here.

const constants = {
  ERROR_TEXTS: {
    INTERNAL_ERROR: "Internal error, please try again.",
    BAD_REQ: "Invalid data provided.",
  },
  HTTP_STATUS: {
    OK: 200,
    BAD_REQUEST: 400,
    UNPROCESSABLE_REQ: 422,
    INTERNAL_ERROR: 500,
    NOT_FOUND: 404,
  },
  LOGS: {
    APP_ERROR: "Error while starting the server.",
    ROUTE_ERROR: "Sorry, the requested resource is not available.",
  },
};

export default constants;
