var routes = require("express").Router();
var SelectController = require("../controllers/SelectController");

routes.get("/", SelectController.index);

module.exports = routes;