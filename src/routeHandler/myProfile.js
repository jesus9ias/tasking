var response = require('../responses');

module.exports = function(req, res, db) {
  res.json(response.OK({
      'profile': {
        id: req.userInfo.id,
        name: req.userInfo.name,
        email: req.userInfo.email
      }
    })
  );
}
