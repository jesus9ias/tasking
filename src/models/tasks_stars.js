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
    }
  },
  config: {
    timestamps: false
  }
};
