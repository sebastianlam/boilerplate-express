let express = require('express');
let app = express();
let spotlight = __dirname + "/views/index.html";
let stylist = __dirname + "/public/style.css";
let square = __dirname + "/public";
console.log("Hello World");
app.use(
  square,
  express.static(stylist)
);
app.get('/', function(req, res) {
    res.sendFile(spotlight);
  });




































 module.exports = app;
