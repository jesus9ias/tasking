var Sequelize = require('sequelize');

module.exports = function(db) {
  db.define('tasks', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    createdAt: {
      type: Sequelize.DATE
    },
    createdBy: {
      type: Sequelize.INTEGER
    },
    assignedTo: {
      type: Sequelize.INTEGER
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    limitDate: {
      type: Sequelize.DATE
    },
    isRecurrent: {
      type: Sequelize.INTEGER
    },
    recurrentId: {
      type: Sequelize.INTEGER
    },
    completedAt: {
      type: Sequelize.DATE
    },
    completedBy: {
      type: Sequelize.INTEGER
    },
    priority: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  }, {});
};
