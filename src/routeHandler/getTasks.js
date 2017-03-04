
module.exports = function(req, res, db) {
  db.models.tasks.findAll().then(function(tasks) {
    res.json({'result': tasks});
  });
}
