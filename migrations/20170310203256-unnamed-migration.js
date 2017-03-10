'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'tasks',
      'createdBy',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
    queryInterface.addColumn(
      'tasks',
      'assignedTo',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('tasks', 'createdBy');
    queryInterface.removeColumn('tasks', 'assignedTo');
  }
};
