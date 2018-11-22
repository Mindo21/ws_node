const http = require('http');
const url = require('url');
const util = require('./utility.js');

const server = http.createServer(
  (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    if (parsedUrl.pathname === '/add') {
      let a = parseFloat(parsedUrl.query.a);
      let b = parseFloat(parsedUrl.query.b);
      response.end(util.add(a, b).toString());
    } else {
      response.statusCode = 404;
      response.end('Not found!\n');
    }
  }
);
server.listen(8080);
