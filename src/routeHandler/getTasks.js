var response = require('../responses');

module.exports = function(req, res, db) {
  var filters = {};
  var statusFilter = req.query.status || '2';
  console.log(new Date(req.query.startLimitDate));
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

  db.models.tasks.findAll({
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
    where: filters
  }).then(function(tasks) {
    res.json(response.OK({ 'tasks': tasks }));
  });
}
