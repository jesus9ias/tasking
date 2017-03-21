var jsonfile = require('jsonfile');

var ENV = process.env.NODE_ENV || 'development';
console.log(ENV);

var config = {
  "development": {
    "SECRET": "wowow",
    "DB": {
      "username": "root",
      "password": "",
      "database": "tasking",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "pool": {
        "max": 5,
        "min": 0,
        "idle": 10000
      }
    }
  }
};

try {
  var userConfig  = jsonfile.readFileSync('./src/config/userConfig.json');
} catch(ignore) {
  var userConfig = config;
  console.log('Using default configuration');
}

var baseConfig = userConfig[ENV];

try {
  var dbConfig  = jsonfile.readFileSync('./src/config/dbConfig.json');
  baseConfig.DB.username = dbConfig[ENV].username;
  baseConfig.DB.password = dbConfig[ENV].password;
  baseConfig.DB.database = dbConfig[ENV].database;
  baseConfig.DB.host = dbConfig[ENV].host;
  baseConfig.DB.dialect = dbConfig[ENV].dialect;
} catch(ignore) {
  console.log('Using default DB configuration');
}

module.exports = baseConfig;
