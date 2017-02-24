var path = require('path');
var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);

app.use(express.static(path.resolve(__dirname, 'dist/public')));

app.get('/', function(req, res) {
  res.json({'result': 'ok'});
});

server.listen('3333', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3333');
});
