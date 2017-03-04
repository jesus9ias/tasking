'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING(100),
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
        status: {
          type: Sequelize.INTEGER(1).UNSIGNED,
          allowNull: false
        }
      },
      {
        engine: 'MYISAM'
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
