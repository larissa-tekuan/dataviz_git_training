var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); // testar com localhost:8080/summer
    res.end();
}).listen(8080);
