var express = require('express');
var http = require('http');
var app = express();

app.get('/',(req, res) => {
   res.send("Hello world!");
});

http.createServer(app).listen(3000,() => {
    console.log(`server running at port 3000`);
});