var usersData = require('./users');
var tasksData = require('./tasks');
var tasksStarsData = require('./tasks_stars');

module.exports = function(db) {
  var Users = db.define('users', usersData.fields, usersData.config);
  var Tasks = db.define('tasks', tasksData.fields, tasksData.config);
  var TasksStars = db.define('tasks_stars', tasksStarsData.fields, tasksStarsData.config);

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

  TasksStars.belongsTo(Users, {
     as: 'starredByUser',
     foreignKey: { name: 'starredBy', allowNull: true }
  });

  Tasks.belongsToMany(Users, { as: 'usersToTasks', through: TasksStars, foreignKey: 'starredTo', otherKey: 'starredBy', allowNull: true });
  Users.belongsToMany(Tasks, { as: 'tasksToUsers', through: TasksStars, foreignKey: 'starredBy', otherKey: 'starredTo', allowNull: true });

  Tasks.hasOne(TasksStars, {
     as: 'starredToTask',
     foreignKey: { name: 'starredTo', allowNull: true }
  });
}
