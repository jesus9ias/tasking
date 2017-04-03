var response = require('../responses');

module.exports = function(req, res, db) {
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
      db.models.tasks_stars.findOne({
        where: {
          starredTo: req.params.id
        }
      }).then(function(star) {
        if (star) {
          star.destroy();
          res.json(response.OK({ 'msg': 'Star removed' }));
        } else {
          db.models.tasks_stars.build({
            starredAt: new Date(),
            starredBy: req.userInfo.id,
            starredTo: req.params.id
          }).save().then(function(newStar) {
            res.json(response.OK({ 'id': newStar.id , 'msg': 'Star added' }));
          });
        }
      });
    } else {
      res.json(response.NOT_FOUND({ 'msg': 'Task not found' }));
    }
  })
}
