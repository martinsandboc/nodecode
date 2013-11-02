var http = require('http');
var cp = require('child_process');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    cp.exec("./fib 45", function(err, output, _) {
        res.end("the sum is " + output);
    });

}).listen(1337);
