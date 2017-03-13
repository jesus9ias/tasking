var response = require('../responses');

module.exports = function(req, res, db) {
  db.models.tasks.findOne({
    include: [
      { model: db.models.users, as: 'createdByUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'assignedToUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'completedByUser', attributes: ['id', 'name'] },
      { model: db.models.tasks_stars, as: 'starredToTask', attributes: ['id', 'starredBy'] }
    ],
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    if (task) {
      res.json(response.OK({ 'task': task }));
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'Task not found' }));
    }
  });
}
