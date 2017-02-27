var Users = require('./users');

module.exports = function(db) {
  Users: Users(db)
}
