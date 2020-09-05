const router = require('express').Router();
const couponsRouter = require('./coupons');
const auth0JwtVerify = require('../middlewares/auth0JwtVerify');

router.use('/coupons', couponsRouter);

module.exports = router;
