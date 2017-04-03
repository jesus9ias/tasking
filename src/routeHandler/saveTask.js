var response = require('../responses');
var moment = require('moment-timezone');

module.exports = function(req, res, db) {
  var createdAt = moment.tz('America/Mexico_City').format('YYYY-MM-DDTHH:mm');
  db.models.tasks.build({
    title: req.query.title,
    description: req.query.description,
    createdAt: createdAt,
    createdBy: req.userInfo.id,
    assignedTo: req.userInfo.id,
    isRecurrent: (req.query.isRecurrent === 'true')? 1 : 0,
    limitDate: req.query.limitDate,
    priority: req.query.priority,
    status: 2
  }).save().then(function(task) {
    res.json(response.OK({ 'task': task }));
  });
}
