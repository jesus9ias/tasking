var response = require('../responses');

module.exports = function(req, res, db) {
  var filters = {};
  var statusFilter = req.query.status || '2';
  filters.status = {
    $in: statusFilter.split(',')
  };
  if (req.query.startLimitDate || req.query.endLimitDate) {
    filters.limitDate = {};
  }
  if (req.query.startLimitDate) {
    filters.limitDate.$gte = req.query.startLimitDate;
  }
  if (req.query.endLimitDate) {
    filters.limitDate.$lte = req.query.endLimitDate;
  }

  filters.$or = {
    createdBy: req.userInfo.id,
    assignedTo: req.userInfo.id
  }

  db.models.tasks.findAll({
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
      },
      {
        model: db.models.tasks_tags,
        as: 'tagsToTask',
        attributes: ['id', 'taggedWith'],
        required: false,
        include: [
          {
            model: db.models.tags,
            as: 'taggedWithTag',
            attributes: ['id', 'name', 'slug'],
            required: false
          }
        ]
      }
    ],
    where: filters,
    order: [['limitDate', 'ASC']]
  }).then(function(tasks) {
    res.json(response.OK({ 'tasks': tasks }));
  });
}
