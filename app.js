var koa = require('koa');
var app = new koa();
var router = require('koa-router');
var mongoose = require('mongoose');

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

mongodb://<dbuser>:<dbpassword>@ds117164.mlab.com:17164/authorportfolio
module.exports = app

app.listen(3000, function(){
   console.log('Server running on https://localhost:3000')
});