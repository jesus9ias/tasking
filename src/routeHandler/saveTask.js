var response = require('../responses');

module.exports = function(req, res, db) {
  db.models.tasks.build({
    title: req.query.title,
    description: req.query.description,
    createdAt: new Date(),
    createdBy: req.userInfo.id,
    isRecurrent: (req.query.isRecurrent === 'true')? 1 : 0,
    limitDate: req.query.limitDate,
    priority: req.query.priority,
    status: 2
  }).save().then(function(task) {
    res.json(response.OK({ 'task': task }));
  });
}
