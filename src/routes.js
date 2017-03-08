var doLogin = require('./routeHandler/doLogin.js');
var getTasks = require('./routeHandler/getTasks.js');
var getTask = require('./routeHandler/getTask.js');
var updateTask = require('./routeHandler/updateTask.js');
var saveTask = require('./routeHandler/saveTask.js');

function routes(tasking) {
  tasking.app.get('/', function(req, res) {
    res.json({'result': 'home'});
  });

  tasking.app.get('/tasks', function(req, res) {
    getTasks(req, res, tasking.db);
  });

  tasking.app.post('/tasks/new', function(req, res) {
    saveTask(req, res, tasking.db);
  });

  tasking.app.get('/tasks/:id', function(req, res) {
    getTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/:id', function(req, res) {
    updateTask(req, res, tasking.db);
  });

  tasking.app.post('/login', function(req, res) {
    console.log(req.query);
    doLogin(req, res, tasking.db);
  });
}

module.exports = routes;
