const jwksRsa = require('jwks-rsa');

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  auth0JwtConfig: {
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.AUTH0_JWKS_URI,
    }),
    audience: process.env.AUTH0_CLIENT_ID,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ['RS256'],
  },
  oktaJwtConfig: {
    audience: process.env.OKTA_CLIENT_ID,
    issuer: process.env.OKTA_ISSUER,
  },
};
