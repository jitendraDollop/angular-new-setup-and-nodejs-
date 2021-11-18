var routes = require("express").Router();
var DashboardController = require("../controllers/DashboardController");

routes.get("/", DashboardController.index);


module.exports = routes;