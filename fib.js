var http = require('http');

function fib(n) {

    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return fib(n-1) + fib(n-2);
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("the magic number is " + fib(45));
}).listen(1337);
