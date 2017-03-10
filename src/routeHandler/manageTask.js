var response = require('../responses');

module.exports = function(req, res, db, status) {
  db.models.tasks.findOne({
    where: {
      id: req.params.id
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
