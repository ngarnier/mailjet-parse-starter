var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.send("This is the server!");
});

app.post("/parse", function(req, res){
  console.log(req.body);
});

app.listen(3000, function(){
  console.log("Server running");
})
