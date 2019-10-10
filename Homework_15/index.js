const fs = require('fs');
const http = require('http');
const os = require("os");
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

let userName = os.userInfo().username;
let date = new Date();

let server = http.createServer(function (req, res) {
    if (req.url === '/') {
        console.log(req.url);
        console.log(date);
        res.write('Hello: ' + userName);
        res.end();
    }
});

function log(msg) {
    console.log(msg);
    fs.appendFileSync("logger.txt", msg + ' Время: ' + date + '\n');
}

myEmitter.on('login', function () {
    log('Пользователь : ' + userName + ' вошел.');
});

myEmitter.on('logout', function () {
    log('Пользователь : ' + userName + ' вышел.');
});

setTimeout(function () {
    setTimeout(function () {
        myEmitter.emit('logout');
    }, 2000);
    myEmitter.emit('login');
}, 2000);


server.listen(3000, function () {
    console.log('Server at http://localhost:3000');
});
