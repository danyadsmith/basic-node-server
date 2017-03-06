var utils = require('./utilities');

var movies = [];

var apiActions = {
  'GET': function (request, response) {
    utils.sendResponse(response, {results: movies}, 200);
  },
  'POST': function (request, response) {
    utils.collectData(request, function (data) {
      utils.storeAPIData(JSON.stringify(data));
      utils.sendResponse(response, 'POST request received successfully.', 201);
    });
  },
  'OPTIONS': function (request, response) {
    utils.sendResponse(response, {results: movies});
  }
};

exports.requestHandler = function (request, response) {
  var action = apiActions[request.method];
  if (action) {
    action(request, response);
  } else {
    utils.sendResponse(response, 'Not Found', 404);
  }
};
