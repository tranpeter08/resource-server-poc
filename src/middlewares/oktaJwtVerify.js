const OktaJwtVerifier = require('@okta/jwt-verifier');

const audience = process.env.OKTA_CLIENT_ID;
const issuer = process.env.OKTA_ISSUER;

async function oktaJwtVerifier(req, res, next) {
  try {
    const verifier = new OktaJwtVerifier({issuer, jwksRequestsPerMinute: 10});

    if (!req.headers.authorization) {
      return next('Unauthorized');
    }

    const token = req.headers.authorization.replace('Bearer ', '');
    const jwt = await verifier.verifyAccessToken(token, audience);

    req.user = jwt.claims;

    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = oktaJwtVerifier;
