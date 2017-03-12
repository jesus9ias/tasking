var response = require('../responses');

module.exports = function(req, res, db) {
  var statusFilter = req.query.status || '2';
  db.models.tasks.findAll({
    include: [
      { model: db.models.users, as: 'createdByUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'assignedToUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'completedByUser', attributes: ['id', 'name'] }
    ],
    where: {
      status: {
        $in: statusFilter.split(',')
      }
    }
  }).then(function(tasks) {
    res.json(response.OK({ 'tasks': tasks }));
  });
}
