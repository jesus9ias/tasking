var Sequelize = require('sequelize');

module.exports = {
  fields: {
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
    priority: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  },
  config: {}
};
