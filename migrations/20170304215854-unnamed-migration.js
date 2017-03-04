'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'tasks',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true
        },
        limitDate: {
          type: Sequelize.DATE,
          allowNull: true
        },
        isRecurrent: {
          type: Sequelize.INTEGER(1).UNSIGNED,
          allowNull: false
        },
        recurrentId: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        completedBy: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        completedAt: {
          type: Sequelize.DATE,
          allowNull: true
        },
        priority: {
          type: Sequelize.INTEGER(1).UNSIGNED,
          allowNull: false
        },
        status: {
          type: Sequelize.INTEGER(1).UNSIGNED,
          allowNull: false
        }
      },
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};
