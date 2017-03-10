var doLogin = require('./routeHandler/doLogin.js');
var getTasks = require('./routeHandler/getTasks.js');
var getTask = require('./routeHandler/getTask.js');
var updateTask = require('./routeHandler/updateTask.js');
var saveTask = require('./routeHandler/saveTask.js');
var manageTask = require('./routeHandler/manageTask.js');

function routes(tasking) {
  tasking.app.get('/', function(req, res) {
    res.json({'result': 'home'});
  });

  tasking.app.post('/login', function(req, res) {
    console.log(req.query);
    doLogin(req, res, tasking.db);
  });

  tasking.app.get('/tasks', function(req, res) {
    getTasks(req, res, tasking.db);
  });

  tasking.app.post('/tasks/save', function(req, res) {
    saveTask(req, res, tasking.db);
  });

  tasking.app.get('/tasks/:id', function(req, res) {
    getTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/:id', function(req, res) {
    updateTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/:id/complete', function(req, res) {
    manageTask(req, res, tasking.db, 3);
  });

  tasking.app.post('/tasks/:id/delete', function(req, res) {
    manageTask(req, res, tasking.db, 4);
  });


}

module.exports = routes;
