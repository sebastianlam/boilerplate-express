let envConfig = require('dotenv').config();
let express = require('express');
let app = express();
let spotlight = __dirname + "/views/index.html";
let public = __dirname + "/public";
console.log("Hello World", envConfig);
let defMessage = {"message": "Hello json"};
app.use(
  "/public",
  express.static(public)
);
app.get('/', function(req, res) {
  res.sendFile(spotlight);
});
app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    defMessage.message = defMessage.message.toUpperCase();
  }
  res.json(defMessage);
});



































 module.exports = app;
