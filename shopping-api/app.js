var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./config/routes");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

var port = 2000;
app.listen(port, ()=>{
    console.log("Server running on port :", port);
})