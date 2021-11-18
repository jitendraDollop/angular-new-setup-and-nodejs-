var routes = require("express").Router();
var FileController = require("../controllers/FileController");

routes.post("/", FileController.upload);

module.exports = routes;