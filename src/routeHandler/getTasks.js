var auth = require('../auth');

module.exports = function(req, res, db) {
  db.models.tasks.findAll().then(function(tasks) {
    if (auth(req.query.token)) {
      res.json({ 'result': tasks });
    } else {
      res.json({ 'result': 'not authorized' });
    }
  });
}
