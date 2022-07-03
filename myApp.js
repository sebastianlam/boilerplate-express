let express = require('express');
let app = express();
let spotlight = __dirname + "/views/index.html";
console.log("Hello World");
app.get('/', function(req, res) {
    res.sendFile(spotlight);
  });




































 module.exports = app;
