var fs = require('fs');

var defaultHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, OPTIONS, DELETE',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

exports.serveStaticFile = function (request, response, statusCode, filePath) {
  var headers = defaultHeaders;
  headers['Content-Type'] = 'text/html';
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  var index = fs.readFileSync(filePath);
  response.write(index.toString());
  response.end();
};

exports.sendResponse = function (response, data, statusCode) {
  var headers = defaultHeaders;
  headers['Content-Type'] = 'application/json';
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.send404 = function (request, response) {
  exports.sendResponse(response, 'Not Found', 404);
};

exports.collectData = function (request, callback) {
  var data = '';
  request.on('data', function (chunk) {
    data += chunk;
  });
  request.on('end', function () {
    callback(JSON.parse(data));
  });
};

exports.storeAPIData = function (data) {
  // var dataFile = '';
  // readFile('./apiTestData.js', 'utf-8', function (error, content) {
  //   if (error) { console.error(error); }
  //   dataFile = content;
  // })
  console.log('Contents of Data: ', data.toString());
  // console.log('Contents of Data File: ', dataFile);
};
