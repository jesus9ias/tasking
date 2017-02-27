
module.exports = function(req, res, db) {
  db.models.users.findAll().then(function(users) {
    res.json({'result': users});
  });
}
