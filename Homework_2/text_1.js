let fs = require('fs');
fs.readFile('Text_1.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

fs.appendFileSync('Text_1.txt', '\n' + 'new content!');