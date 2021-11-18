var routes = require("express").Router();
var HomeController = require("../controllers/HomeController");

routes.get("/", HomeController.index);


module.exports = routes;