const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

server.listen(5000, () => {
    console.log('listening on *:3000');
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.get('/users', function(req, res) {
    //Värdet på query-parametrar ligger i objektet req.query
    res.send(req.query)
   });