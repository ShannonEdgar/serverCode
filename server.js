var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

var server = http.createServer();
var server2 = http.createServer();

var arrayGood = ["You good yo", "You rad yo"]
var arrayBad = ["You bad yo", "You lame yo"]

server.listen(PORT, function(){
	console.log("Server On")
	console.log("You good yo")
});	

server2.listen(PORT2, function(){
	console.log("Server On Yo")
	console.log("You lame yo")

});