var Users = require('./users');
var Tasks = require('./tasks');

module.exports = function(db) {
  Users(db);
  Tasks(db);
}
