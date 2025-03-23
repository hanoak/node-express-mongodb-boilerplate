// Add all your app's config here along with envs

const config = {
  AXIOS_TIMEOUT: 60 * 1000,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
};

export default config;
