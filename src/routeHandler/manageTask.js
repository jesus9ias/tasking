var response = require('../responses');

module.exports = function(req, res, db, status) {
  db.models.tasks.findOne({
    where: {
      id: req.params.id,
      $or: {
        createdBy: req.userInfo.id,
        assignedTo: req.userInfo.id
      }
    }
  }).then(function(task) {
    if (task) {
      task.update({
        status: status
      });
      res.json(response.OK({ 'task': task }));
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'Task not found' }));
    }
  });
}
