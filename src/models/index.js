var usersData = require('./users');
var tasksData = require('./tasks');

module.exports = function(db) {
  var Users = db.define('users', usersData.fields, usersData.config);
  var Tasks = db.define('tasks', tasksData.fields, tasksData.config);

  Tasks.belongsTo(Users, {
     as: 'createdByUser',
     foreignKey: { name: 'createdBy', allowNull: false }
  });
  Tasks.belongsTo(Users, {
     as: 'assignedToUser',
     foreignKey: { name: 'assignedTo', allowNull: true }
  });
  Tasks.belongsTo(Users, {
     as: 'completedByUser',
     foreignKey: { name: 'completedBy', allowNull: true }
  });
}
