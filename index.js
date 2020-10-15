var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);

function c_inicio(req,res) {
    res.send('<h1> Index en Express</h1>');
}

function c_saludo(req,res) {
    res.send('<h1> Hola James</h1>');
}

function c_server() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+ port);
}

var server = app.listen(8000,c_server);