var express = require('express');

var todocontroller = requires('./controllers/todocontroller')
var app =  express();

app.set('view engine','ejs');

app.use(express.static('./public'))

app.listen(3000);
console.log("listening to port 3000");