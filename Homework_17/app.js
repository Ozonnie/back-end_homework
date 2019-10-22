const Converter = require('./module_converter');
const request = require('request');
const nodemon = require('nodemon');
const http = require('http');
const port = 3000;
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';


http.createServer(function (req, res) {

   request(url, function (error, response, body) {
      res.writeHead(200, {
         "Content-Type": "text/html; charset=utf-8"
      });

      let data = JSON.parse(body);
      let saleUSD = new Converter(data[0].buy);
      let buyUSD = new Converter(data[0].sale);
      let saleEUR = new Converter(data[1].buy);
      let buyEUR = new Converter(data[1].sale);
      let saleRUB = new Converter(data[2].buy);
      let buyRUB = new Converter(data[2].sale);

      res.write('1 USD равен: ' + saleUSD.convertToUa(1) + ' UAH. ' + '1 EUR равен: ' + saleEUR.convertToEur(1) + ' UAH. ' + '1 RUB равен: ' + saleRUB.convertToRub(1) + ' UAH. ');
      res.end();
   });
}).listen(port, function () {
   console.log('Server at http://localhost:3000');
});