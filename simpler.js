// adapted from http://nodejs.org/

var http = require('http');

function requestHandler(req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}

var server = http.createServer(requestHandler);
server.listen(1337);
