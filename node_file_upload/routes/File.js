var routes = require("express").Router();
var FileController = require("../controllers/FileController");

routes.get("/delete/:id", FileController.get);

routes.get("/edit/:id", FileController.edit);

module.exports = routes;