require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {NODE_ENV} = require('./config');
const oktaJwtCheck = require('./middlewares/oktaJwtVerify');
const auth0JwtCheck = require('./middlewares/auth0JwtVerify');
const validateCouponFields = require('./middlewares/validateCouponFields');

const app = express();
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', validateCouponFields, (req, res) => {
  res.send('Hello, world!');
});

app.get('/auth0', auth0JwtCheck, (req, res, next) => {
  console.log(req.user);
  res.send('auth0 protected assets');
});

app.get('/okta', oktaJwtCheck, (req, res, next) => {
  res.send('okta protected assests');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  } else {
    reponse = {message: error.message, error};
  }

  console.log('From error handler:', error);
  res.status(500).json(response);
});

module.exports = app;
