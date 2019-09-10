var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
const cors = require('cors');

app.use(cors())

app.post('/login', function (req, res) {
	res.status(200).json({token: '321dqfadsf23dd'});
})

app.get('/', function (req, res) {
	res.status(200).json({ statusMsg: 'Welcome' });
})

app.get('/logout', function (req,res) {
	res.status(401).json({ statusMsg: 'Token Expired' });
})

app.get('/getSomeData', function (req,res) {
	const number = Math.floor(Math.random() * 20 + 1)
	let data = []
	for( var i = 0 ; i<  number; i++ ) {
		data = [...data, {
			name: `test${i}`,
			id: i
		}]
	}
	res.status(200).json({data});
})

app.get('/get500', function (req,res) {
	res.status(500).json({statusMsg: 'Something went wrong!'});
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});