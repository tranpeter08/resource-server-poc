const Coupon = require('../models/Coupon');

module.exports = async function validateCouponFields(req, res, next) {
  try {
    const result = await Coupon.validateAsync(req.body);
    console.log(result);

    next();
  } catch (error) {
    console.log(error.details);
    res.status(400).json({error: 'invalid coupon field(s)'});
  }
};
