import { ValidationError } from "../errors/index.js";
import postsValidator from "./posts.validatior.js";

export default (route = "") =>
  async (req, res, next) => {
    const appValidators = {
      posts: postsValidator,
    };

    const validator = appValidators[route];

    const result = (await validator.run(req))
      .map((field) => field.array())
      .reduce((acc, val) => [...acc, ...val], []);

    if (result.length) throw new ValidationError(result[0].msg);

    return next();
  };
