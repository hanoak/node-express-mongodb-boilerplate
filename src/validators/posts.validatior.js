import { checkSchema } from "express-validator";

export default checkSchema({
  body: {
    in: "body",
    isString: {
      errorMessage: "Post body is required.",
      bail: true,
    },
    trim: true,
    isLength: {
      errorMessage: "post's body should be between 1 to 200 characters.",
      options: {
        min: 1,
        max: 200,
      },
      bail: true,
    },
  },
  permalink: {
    in: "body",
    isString: {
      errorMessage: "Post's permalink is required.",
      bail: true,
    },
    trim: true,
    isLength: {
      errorMessage: "post's permalink should be between 1 to 20 characters.",
      options: {
        min: 1,
        max: 20,
      },
      bail: true,
    },
  },
  author: {
    in: "body",
    isString: {
      errorMessage: "Post's author is required.",
      bail: true,
    },
    trim: true,
    isLength: {
      errorMessage: "post's author should be between 1 to 20 characters.",
      options: {
        min: 1,
        max: 20,
      },
      bail: true,
    },
  },
  title: {
    in: "body",
    isString: {
      errorMessage: "Post's title is required.",
      bail: true,
    },
    trim: true,
    isLength: {
      errorMessage: "post's title should be between 1 to 20 characters.",
      options: {
        min: 1,
        max: 20,
      },
      bail: true,
    },
  },
});
