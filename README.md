# node-express-mongodb-boilerplate

Hello! This is a simple production-grade express.js app with mongodb. It has the following features:

1.  precommit hook: [Husky](https://github.com/typicode/husky).
2.  Code prettifier: [Prettier](https://github.com/prettier/prettier).
3.  Code linter: [ESLint](https://www.npmjs.com/package/eslint).
4.  [Lint-staged](https://www.npmjs.com/package/lint-staged) precommit hook.
5.  [Nodemon](https://www.npmjs.com/package/nodemon) for development environment.
6.  NoSQL database: [MongoDB](https://www.mongodb.com/) object data modeling using [Mongoose](https://mongoosejs.com/).
7.  Request validation: request data validation using [Express-validator](https://www.npmjs.com/package/express-validator).
8.  [dotenv](https://www.npmjs.com/package/dotenv) for handling env variables.
9.  Production-grade Logger using [winston](https://github.com/winstonjs/winston).
10. Error handling: centralized error handling class
11. Secure HTTP headers using [helmet](https://helmetjs.github.io/).
12. Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors).
13. Sanitize request data using [Express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize).
14. Utility middlewares in `src/middlewares`: Global error middleware, logger middleware, unmatched routes middleware, etc.
15. Async router using [express-async-errors](https://www.npmjs.com/package/express-async-errors).
16. development & production configurations.
17. Common utility functions in `src/utils`
18. Basic build script in `/build.sh`
19. Apps constants in `src/constants`.
20. MVC folder structure.

## Prerequisites

1. Node.js & NPM
2. Mongodb

## Quick Start

    git clone https://github.com/hanoak/node-express-mongodb-boilerplate.git

## Installing

    npm i

## Commands

1.  Update the env variables in `/.env file`.
2.  For local development run `npm run dev`.
3.  And for production, `bash build.sh` && `cd dist` && `npm run start`

## Environment variables

Environmental variables can be found in /.env.example:

    PORT=5000
    NODE_ENV=development
    MONGODB_URI=

## Routes

Sample routes can be found in `src/routes`

`GET /posts` - get all posts  
`GET /posts/latest` - get the latest post
`GET /posts/:id` - get a single post
`POST /posts` - add a post  
`DELETE /posts/:id` - delete a post

## Project Structure

    src\
     |--config\         # Environment variables and app's configuration
     |--constants\      # App's string constants
     |--controllers\    # App's controller layer
     |--errors\         # App's global error handler class
     |--logger\         # HTTP logger
     |--middlewares\    # Custom express middlewares
     |--models\         # Mongoose models: data layer
     |--routes\         # App's Routes
     |--services\       # App's business logic: service layer
     |--utils\          # Utility functions
     |--validators\     # Request data validation schemas
     |--database.js     # Seed mongodb collections
     |--index.js        # App's entry point

## License

[MIT](https://github.com/hanoak/node-express-mongodb-boilerplate/blob/main/LICENSE)
