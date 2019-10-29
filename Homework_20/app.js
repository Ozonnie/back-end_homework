const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

let users = [];

io.on('connection', function (socket) {
    console.log('A user connected');
    socket.on('setUserName', function (data) {
        console.log(data);
        if (users.indexOf(data) > -1) {
            console.log(data);
            socket.emit('userExist', '<p class="bg-primary"> Пользователь ' +
                '<b>' + data + '</b>' + 'уже существует, выбери другое имя!</p>');
        } else {
            users.push(data);
            socket.emit('userSet', {
                userName: data
            });
        }
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('message', function (data) {
        io.sockets.emit('newMessage', data);
    });
});

// http.listen(3000, '192.168.0.103' || 'localhost', function () {
//     console.log('Go to chat at http://localhost:3000');
// });

if (server.listen(port) != undefined) {
    console.log('Server listing at http://192.168.0.103:' + port);
}