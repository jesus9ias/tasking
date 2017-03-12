var Sequelize = require('sequelize');

module.exports = {
  fields: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    },
    token: {
      type: Sequelize.STRING
    }
  },
  config: {}
};
