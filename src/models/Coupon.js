const Joi = require('joi');

module.exports = Joi.object({
  coupon_code: Joi.required(),
  discount_value: Joi.required(),
  validate_rules: Joi.custom((value) => {}).required(),
  redemption_limit: Joi.number().required(),
  timeframe: Joi.date().required(),
  metadata: Joi.required(),
  tiers: Joi.required(),
});

/*

Coupon Code (has to be unique)
Discount Value (document attached)
Validation Rules (document attached)
Redemption Limit (number of times it's allowed to be used)
Timeframe (Start/Expiration date)
Metadata (key/value pairs)
Tiers (document attached)

*/
