var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send('Hello GET.');
});

app.post('/',function(req, res){
    res.send('Hello POST.');
});

app.get('/list',function(req, res){
    res.send('Hello LIST.');
});

var server = app.listen(3000, function(){
    console.log('listen on port: 3000');
});