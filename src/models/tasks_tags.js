var Sequelize = require('sequelize');

module.exports = {
  fields: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    taggedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  config: {
    timestamps: false
  }
};
