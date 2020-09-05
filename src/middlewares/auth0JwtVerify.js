const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');

const auth0JwtConfig = {
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_JWKS_URI,
  }),
  audience: process.env.AUTH0_FRONTEND_CLIENT_ID,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256'],
};

module.exports = jwt(auth0JwtConfig);
