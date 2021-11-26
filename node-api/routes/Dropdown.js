var routes = require("express").Router();
var DropdownController = require("../controllers/DropdownController");

routes.get("/", DropdownController.index);

module.exports = routes;