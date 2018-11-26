var koa = require('koa');
var app = new koa();
var router = require('koa-router');
var mongoose = require('mongoose');
var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + './index.html').pipe(res)
	}
});


mongodb://<dbuser>:<dbpassword>@ds117164.mlab.com:17164/authorportfolio
module.exports = app

app.listen(3000);
console.log('port 3000 here');