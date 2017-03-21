var moment = require('moment');
var response = require('../responses');

module.exports = function(req, res, db) {
  var activeTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 2
    }
  });
  var completedTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 3
    }
  });
  var expiredTasks = db.models.tasks.findOne({
    attributes: [[db.fn('COUNT', db.col('id')), 'total']],
    where: {
      status: 2,
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
