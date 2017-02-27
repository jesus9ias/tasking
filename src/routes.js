var getTasks = require('./routeHandler/getTasks.js');

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

  tasking.app.post('/login', function(req, res) {
    res.json({'result': 'login'});
  });
}

module.exports = routes;
