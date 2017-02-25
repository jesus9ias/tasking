var getTasks = require('./routeHandler/getTasks.js');

function routes(app) {
  app.get('/', function(req, res) {
    res.json({'result': 'home'});
  });

  app.get('/tasks', function(req, res) {
    getTasks(req, res);
  });

  app.get('/tasks/:id', function(req, res) {
    res.json({'result': 'task ' + req.params.id});
  });

  app.post('/login', function(req, res) {
    res.json({'result': 'login'});
  });
}

module.exports = routes;
