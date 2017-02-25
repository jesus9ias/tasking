var path = require('path');
var express = require('express');
var http = require('http');
var routes = require('./src/routes.js');

var app = express();
var server = http.Server(app);

app.use(express.static(path.resolve(__dirname, 'dist/public')));

routes(app);

server.listen('3333', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3333');
});
