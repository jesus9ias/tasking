var Sequelize = require('sequelize');
var moment = require('moment-timezone');

module.exports = {
  fields: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  },
  config: {
    timestamps: false
  }
};
