var response = require('../responses');

module.exports = function(req, res, db) {
  res.json(response.OK({ 'msg': 'star' }));
}
