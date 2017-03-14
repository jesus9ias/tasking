var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var response = require('../responses');
var config = require('../config');

module.exports = function(req, res, db) {
  db.models.users.findOne({
    where: {
      email: req.userInfo.email
    }
  }).then(function(user) {
    if (user) {
      user.update({
        token: ''
      });
      res.json(response.OK({ 'msg': 'Logued out' }));
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'user not found' }));
    }
  });
}
