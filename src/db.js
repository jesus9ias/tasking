var Sequelize = require('sequelize');
var models = require('./models');
var config = require('./config');

var sequelize = new Sequelize(config.DB.database, config.DB.username, config.DB.password, {
  host: config.DB.host,
  dialect: config.DB.dialect,
  pool: config.DB.pool
});

models(sequelize);

module.exports = {
  instance: sequelize
}
