var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var response = require('../responses');
var config = require('../config');

module.exports = function(req, res, db) {
  db.models.users.findOne({
    where: {
      email: req.query.email
    }
  }).then(function(user) {
    if (user) {
      bcrypt.compare(req.query.password, user.password, function(err, result) {
        if (result === true) {
          var token = jwt.sign({ id: user.id }, config.SECRET);
          user.update({
            token: token
          });
          res.json(response.OK({ 'token': token }));
        } else {
          res.json(response.ERROR({ 'msg': 'incorrect login data' }));
        }
      });
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'user not found' }));
    }
  });
}
