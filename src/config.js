const jwksRsa = require('jwks-rsa');

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
};
