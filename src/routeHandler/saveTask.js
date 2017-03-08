var response = require('../responses');

module.exports = function(req, res, db) {
  db.models.tasks.build({
    title: req.query.title,
    description: req.query.description,
    isRecurrent: 0,
    priority: 1,
    status: 2
  }).save().then(function(task) {
    res.json(response.OK({ 'task': task }));
  });
}
