var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./src/routes.js');
var db = require('./src/db.js');
var auth = require('./src/middlewares/auth');
var cors = require('./src/middlewares/cors');

var app = express();
var server = http.Server(app);

app.use(express.static(path.resolve(__dirname, 'dist/public')));

app.use(auth.authDb(db.instance));
app.use(auth.authRoutes(db.instance));
app.use(cors);

var tasking = {
  app: app,
  db: db.instance
}

routes(tasking);

server.listen('3333', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3333');
});
