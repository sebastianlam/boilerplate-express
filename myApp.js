let express = require('express');
let app = express();
let spotlight = __dirname + "/views/index.html";
let public = __dirname + "/public";
console.log("Hello World");
app.use(
  "/public",
  express.static(public)
);
app.get('/', function(req, res) {
    res.sendFile(spotlight);
  });




































 module.exports = app;
