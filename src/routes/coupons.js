const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('hello');
});

router.post('/', (req, res, next) => {
  res.send('hello post coupons');
});

module.exports = router;
