var utils = require('./utilities');

var webServerActions = {
  'GET': function (request, response) {
    var url = (request.url === '/') ? '../index.html' : '../' + request.url;
    utils.serveStaticFile(request, response, 200, url);
  },
};

exports.requestHandler = function (request, response) {
  var action = webServerActions[request.method];
  if (action) {
    action(request, response);
  } else {
    utils.sendAPIResponse(response, 'Not Found', 404);
  }
};
