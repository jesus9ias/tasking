var Sequelize = require('sequelize');

module.exports = {
  fields: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    starredAt: {
      type: Sequelize.DATE
    },
    starredBy: {
      type: Sequelize.INTEGER
    }
  },
  config: {
    timestamps: false
  }
};
