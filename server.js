var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');


app.get('/', function(req,res){ 
	res.sendFile( __dirname + "/index.html");
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});