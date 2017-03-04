var Sequelize = require('sequelize');
var models = require('./models');
var config = require('./config');

var sequelize = new Sequelize(config.DB.database, config.DB.username, config.DB.password, {
  host: config.DB.host,
  dialect: config.DB.dialect,
  pool: config.DB.pool
});

/*sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });*/

models(sequelize);

module.exports = {
  instance: sequelize
}
