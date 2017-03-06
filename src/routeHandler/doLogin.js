var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = function(req, res, db) {
  console.log(req.query);
  db.models.users.findOne({
    where: {
      email: req.query.email
    }
  }).then(function(user) {
    if (user) {
      bcrypt.compare(req.query.password, user.password, function(err, result) {
        if (result === true) {
          var token = jwt.sign({ id: user.id }, config.SECRET);
          res.json({ 'token': token });
        } else {
          res.json({ 'result': 'incorrect login data' });
        }
      });
    } else {
      res.json({'result': 'user not found'});
    }
  });
}
