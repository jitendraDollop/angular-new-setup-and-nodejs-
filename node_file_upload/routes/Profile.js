var routes = require("express").Router();
var ProfileController = require("../controllers/ProfileController");

routes.get("/", ProfileController.index);

module.exports = routes;