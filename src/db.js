var Sequelize = require('sequelize');
var models = require('./models');
var config = require('./config');

var sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: config.DB_DIALECT,
  pool: config.DB_POOL
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
