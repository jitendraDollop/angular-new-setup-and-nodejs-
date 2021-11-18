var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes.js");
var uplaod = require("express-fileupload");
var session = require("express-session");
var flash = require("express-flash");

app.set('view engine', 'ejs');


app.use(express.static(__dirname+"/assets"));
app.use(express.static(__dirname+"/files"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(uplaod());
app.use(session({secret : "hello user"}));
app.use(flash());

app.use(function(req, res, next){
    res.locals.session = req.session;
     res.locals.url=req.session.urlencoded;
     next();
    })

app.use(routes);


var port = 2000;
app.listen(port, ()=>{
    console.log("Server Running is on Port : ...", port);
});