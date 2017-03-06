var http = require('http');
var url = require('url');
var fs = require('fs');

var ip = '127.0.0.1';
var port = 3000;
var defaultHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, OPTIONS, DELETE',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'text/html'
  //'Content-Type': 'application/json'
};

var index = fs.readFileSync('../index.html');

var server = http.createServer(function (request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  if (request.method === 'GET') {

    console.log('Executing a GET request');
    response.writeHead(200, defaultHeaders);
    response.end(index);

  } else if (request.method === 'POST') {

    response.writeHead(201, defaultHeaders);
    console.log(request.body);
    response.end();

  }
});

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);

