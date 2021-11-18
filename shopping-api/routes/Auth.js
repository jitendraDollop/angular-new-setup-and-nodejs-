var routes = require("express").Router();
var AuthController = require("../controllers/AuthController");

routes.post("/", AuthController.login);

module.exports = routes;