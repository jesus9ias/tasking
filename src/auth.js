var jwt = require('jsonwebtoken');
var config = require('./config');

module.exports = function (token) {
  try {
    jwt.verify(token, config.SECRET);
    return true
  } catch(err) {
    return false;
  }
}
