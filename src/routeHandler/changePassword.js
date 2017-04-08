var moment = require('moment-timezone');
var bcrypt = require('bcryptjs');
var response = require('../responses');

module.exports = function(req, res, db) {
  var updatedAt = moment.tz('America/Mexico_City').format('YYYY-MM-DDTHH:mm');
  if (req.query.newPassword === req.query.confirmPassword) {
    db.models.users.findOne({
      where: {
        email: req.userInfo.email
      }
    }).then(function(user) {
      if (user) {
        bcrypt.compare(req.query.password, user.password, function(err, result) {
          if (result === true) {
            var newPassword = bcrypt.hashSync(req.query.newPassword, 12);
            user.update({
              password: newPassword,
              updatedAt: updatedAt
            });
            res.json(response.OK({ 'msg': 'Password changed' }));
          } else {
            res.json(response.ERROR({ 'msg': 'Incorrect user data' }));
          }
        });
      } else {
        res.json(response.NOT_FOUND({ 'msg': 'User not found' }));
      }
    });
  } else {
    res.json(response.ERROR({ 'msg': 'Password not confirmed' }));
  }
}
