var response = require('../responses');

module.exports = function(req, res, db) {
  var statusFilter = req.query.status || '2';
  db.models.tasks.findAll({
    where: {
      status: {
        $in: statusFilter.split(',')
      }
    }
  }).then(function(tasks) {
    res.json(response.OK({ 'tasks': tasks }));
  });
}
