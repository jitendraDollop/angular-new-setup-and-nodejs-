var routes = require("express").Router();
var FilesController = require("../controllers/FilesController");

routes.get("/:type", FilesController.index);

routes.post("/:type", FilesController.upload);

module.exports = routes;