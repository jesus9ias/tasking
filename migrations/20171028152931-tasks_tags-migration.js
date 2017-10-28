'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'tasks_tags',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        taggedAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        taggedBy: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
              model: 'users',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'set null'
        },
        taggedTo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'tasks',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        taggedWith: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'tags',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      {
        engine: 'InnoDB'
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks_tags');
  }
};
