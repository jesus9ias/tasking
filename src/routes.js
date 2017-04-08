var doLogin = require('./routeHandler/doLogin.js');
var checkSession = require('./routeHandler/checkSession.js');
var changePassword = require('./routeHandler/changePassword.js');
var logout = require('./routeHandler/logout.js');
var myProfile = require('./routeHandler/myProfile.js');
var home = require('./routeHandler/home.js');
var getTasks = require('./routeHandler/getTasks.js');
var getTask = require('./routeHandler/getTask.js');
var manageTask = require('./routeHandler/manageTask.js');
var updateTask = require('./routeHandler/updateTask.js');
var saveTask = require('./routeHandler/saveTask.js');
var starTask = require('./routeHandler/starTask.js');

function routes(tasking) {
  tasking.app.get('/', function(req, res) {
    home(req, res, tasking.db);
  });

  tasking.app.post('/login', function(req, res) {
    doLogin(req, res, tasking.db);
  });

  tasking.app.post('/checkSession', function(req, res) {
    checkSession(req, res, tasking.db);
  });

  tasking.app.post('/changePassword', function(req, res) {
    changePassword(req, res, tasking.db);
  });

  tasking.app.post('/logout', function(req, res) {
    logout(req, res, tasking.db);
  });

  tasking.app.get('/profile', function(req, res) {
    myProfile(req, res, tasking.db);
  });

  tasking.app.get('/tasks', function(req, res) {
    getTasks(req, res, tasking.db);
  });

  tasking.app.get('/tasks/:id([0-9]+)?', function(req, res) {
    getTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/:id([0-9]+)?', function(req, res) {
    updateTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/save', function(req, res) {
    saveTask(req, res, tasking.db);
  });

  tasking.app.post('/tasks/:id([0-9]+)?/complete', function(req, res) {
    manageTask(req, res, tasking.db, 3);
  });

  tasking.app.post('/tasks/:id([0-9]+)?/delete', function(req, res) {
    manageTask(req, res, tasking.db, 4);
  });

  tasking.app.post('/tasks/:id([0-9]+)?/reopen', function(req, res) {
    manageTask(req, res, tasking.db, 2);
  });

  tasking.app.post('/tasks/:id([0-9]+)?/star', function(req, res) {
    starTask(req, res, tasking.db);
  });


}

module.exports = routes;
