var express = require('express');
var http = require('http');
var app = express();

app.get('/',(req, res) => {
   console.log("hey");
   res.send("Hello world!");
});

console.log("edit");
console.log("file");

console.log("hello ramesh");

http.createServer(app).listen(3000,() => {
    console.log(`server running at port 3000`);
});
