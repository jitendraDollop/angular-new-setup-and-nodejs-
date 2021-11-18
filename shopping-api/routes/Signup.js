var routes = require("express").Router();
var SignupController = require("../controllers/SignupController");

routes.post("/", SignupController.save);

module.exports = routes;