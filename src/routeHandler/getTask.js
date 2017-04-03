var response = require('../responses');

module.exports = function(req, res, db) {
  db.models.tasks.findOne({
    attributes: [
      'id',
      'title',
      'description',
      [db.fn('DATE_FORMAT', db.col('tasks.createdAt'), '%Y-%m-%dT%H:%i'), 'createdAt'],
      'createdBy',
      'assignedTo',
      [db.fn('DATE_FORMAT', db.col('tasks.updatedAt'), '%Y-%m-%dT%H:%i'), 'updatedAt'],
      [db.fn('DATE_FORMAT', db.col('tasks.limitDate'), '%Y-%m-%dT%H:%i'), 'limitDate'],
      'isRecurrent',
      'recurrentId',
      [db.fn('DATE_FORMAT', db.col('tasks.completedAt'), '%Y-%m-%dT%H:%i'), 'completedAt'],
      'completedBy',
      'priority',
      'status'
    ],
    include: [
      { model: db.models.users, as: 'createdByUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'assignedToUser', attributes: ['id', 'name'] },
      { model: db.models.users, as: 'completedByUser', attributes: ['id', 'name'] },
      {
        model: db.models.tasks_stars,
        as: 'starredToTask',
        attributes: ['id', 'starredAt'],
        where: {
          starredBy: req.userInfo.id
        },
        required: false
      }
    ],
    where: {
      id: req.params.id,
      $or: {
        createdBy: req.userInfo.id,
        assignedTo: req.userInfo.id
      }
    }
  }).then(function(task) {
    if (task) {
      res.json(response.OK({ 'task': task }));
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'Task not found' }));
    }
  });
}
