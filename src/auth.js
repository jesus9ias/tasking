var jwt = require('jsonwebtoken');
var response = require('./responses');
var config = require('./config');

function authRoutes(db) {
  return function(req, res, next) {
    if (req.path === '/login') {
      next()
    } else {
      var token = req.query.token;
      if (!token) {
        res.json(response.NEED_LOGIN({ msg: 'Must provide a valid token' }));
      } else {
        try {
          var decoded = jwt.verify(token, config.SECRET);
          db.models.users.findOne({
            where: {
              id: decoded.id,
              token: token
            }
          }).then(function(user) {
            if (user) {
              next()
            } else {
              res.json(response.NEED_LOGIN({ 'msg': 'not authorized' }));
            }
          });
        } catch(err) {
          res.json(response.NEED_LOGIN({ 'msg': 'not authorized' }));
        }
      }
    }
  }
}

module.exports = {
  authRoutes
};
