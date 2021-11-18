var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes.js");
var cors = require("cors");
var uplaod = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(uplaod());

app.post("/api/upload", (req, res)=>{
    // console.log(req.files);
    // var file = req.image;
    file.mv(__dirname+"/assets/images/"+file.name, (err)=>{
        res.send({ path : "http://localhost:2000/images/"+file.name });
    });
});

app.use(routes);


var port = 2000;
app.listen(port, ()=>{
    console.log("Server Running is on Port : ...", port);
});