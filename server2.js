var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World, you are awesome!');
  res.end();
}).listen(8080);


http.createServer(function (req2, res2) {
  res2.write('Hello World, you suck!');
  res2.end();
}).listen(7000);