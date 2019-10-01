let fs = require('fs');

fs.readFile('text_json.json', function (err, data) {
    if (err) throw err;
    let arr = data.toString();
    arr = JSON.parse(arr);
    console.log(arr.name);
    console.log(arr.age);
    console.log(arr.sex);
    console.log(arr.id);
});