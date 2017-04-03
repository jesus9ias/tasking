var moment = require('moment');
var response = require('../responses');

module.exports = function(req, res, db) {
  var activeTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 2,
      $or: {
        createdBy: req.userInfo.id,
        assignedTo: req.userInfo.id
      }
    }
  });
  var completedTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 3,
      $or: {
        createdBy: req.userInfo.id,
        assignedTo: req.userInfo.id
      }
    }
  });
  var expiredTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 2,
      $or: {
        createdBy: req.userInfo.id,
        assignedTo: req.userInfo.id
      },
      limitDate: {
        'lt': moment.now()
      }
    }
  });
  activeTasks.then(function(totalActive) {
    completedTasks.then(function(totalCompleted) {
      expiredTasks.then(function(totalExpired) {
        res.json(response.OK({
          'active': totalActive,
          'completed': totalCompleted,
          'expired': totalExpired
        }));
      });
    });
  });
}
