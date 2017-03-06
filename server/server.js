var http = require('http');
var urlParser = require('url');
var utils = require('./utilities');
var api = require('./apiRequestHandler');
var web = require('./webRequestHandler');

var ip = '127.0.0.1';
var port = 3000;

var routes = {
  '/': web.requestHandler,
  '/movies': api.requestHandler
};

var server = http.createServer(function (request, response) {
  console.log('Serving ' + request.method + ' request for url ' + request.url);
  var parts = urlParser.parse(request.url);
  var route = routes[parts.pathname];

  if (typeof route === 'function') {
    route(request, response);
  } else {
    utils.send404(request, response);
  }
});

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
