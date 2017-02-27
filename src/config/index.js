var jsonfile = require('jsonfile');

var config = {
  DB_HOST: 'localhost',
  DB_USER: 'root',
  DB_PASS: '',
  DB_NAME: 'tasking',
  DB_DIALECT: 'mysql',
  DB_POOL: {
    max: 5,
    min: 0,
    idle: 10000
  }
};

try {
  config  = jsonfile.readFileSync('../config.json');
} catch(ignore) {
  console.log('Using default configuration');
}

module.exports = config;
