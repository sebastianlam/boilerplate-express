let envConfig = require('dotenv').config();
let express = require('express');
let app = express();
let spotlight = __dirname + "/views/index.html";
let public = __dirname + "/public";
console.log("Hello World", envConfig);
let defMessage = "Hello json";
Date().toString()
app.use(
  function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  }
)
app.use(
  "/public",
  express.static(public)
);
app.get('/', function(req, res) {
  res.sendFile(spotlight);
});
app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    defMessage = defMessage.toUpperCase();
  }
  res.json({"message": defMessage});
});
app.get(
  "/now",
  function(req, res, next) {
    req.time = Date().toString();
    next();
  },
  function(req, res) {
    res.json({time: req.time});
  }
);




































 module.exports = app;
