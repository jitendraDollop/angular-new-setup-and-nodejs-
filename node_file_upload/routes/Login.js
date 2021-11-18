var routes = require("express").Router();
var LoginController = require("../controllers/LoginController");

routes.get("/", LoginController.index);
routes.post("/", LoginController.login);

module.exports = routes;