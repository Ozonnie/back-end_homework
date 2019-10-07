const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
    if (req.url === '/') {
        console.log(req.url);
        res.write('Hello world');
        res.end();
    } else if (req.url === '/about') {
        console.log(req.headers);
        console.log(req.url);
        res.write('About us');
        res.end();
    } else if (req.url === '/contact') {
        console.log(req.url);
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
});

server.listen(3000, function () {
    console.log('Server at http://localhost:3000');
});