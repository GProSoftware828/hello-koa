var koa = require('koa');
var app = new koa();
var router = require('koa-router');
var mongoose = require('mongoose');
var Pug = require('koa-pug');

app.use(function* (){
   this.body = pug;
});

var pug = new Pug({
   viewPath: './views',
   basedir: './views',
   app: app //Equivalent to app.use(pug)
});

var _ = router(); //Instantiate the router

_.get('/hello', getMessage); // Define routes

function *getMessage(){
   this.render('first_view');
};

mongodb://<dbuser>:<dbpassword>@ds117164.mlab.com:17164/authorportfolio
module.exports = app

app.use(_.routes()); //Use the routes defined using the router
app.listen(3000);