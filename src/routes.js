var getTasks = require('./routeHandler/getTasks.js');
var doLogin = require('./routeHandler/doLogin.js');

function routes(tasking) {
  tasking.app.get('/', function(req, res) {
    res.json({'result': 'home'});
  });

  tasking.app.get('/tasks', function(req, res) {
    getTasks(req, res, tasking.db);
  });

  tasking.app.get('/tasks/:id', function(req, res) {
    res.json({'result': 'task ' + req.params.id});
  });

  tasking.app.get('/login', function(req, res) {
    console.log(req.params);
    doLogin(req, res, tasking.db);
  });

  tasking.app.post('/login', function(req, res) {
    console.log(req.query);
    doLogin(req, res, tasking.db);
  });
}

module.exports = routes;
