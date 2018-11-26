var koa = require('koa');
var app = new koa();
var mongoose = require('mongoose');

app.use(function* (){
   this.body = 'Hello world!';
});

mongodb://<dbuser>:<dbpassword>@ds117164.mlab.com:17164/authorportfolio
module.exports = app

app.listen(4000, function(){
   console.log('Server running on https://localhost:4000')
});