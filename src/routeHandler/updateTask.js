var response = require('../responses');

module.exports = function(req, res, db) {
  db.models.tasks.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    if (task) {
      task.update({
        title: req.query.title,
        description: req.query.description,
        isRecurrent: (req.query.isRecurrent === 'true')? 1 : 0,
        limitDate: req.query.limitDate,
        priority: req.query.priority,
      });
      res.json(response.OK({ 'task': task }));
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'Task not found' }));
    }
  });
}
