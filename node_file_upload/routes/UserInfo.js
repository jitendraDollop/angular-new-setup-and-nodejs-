var routes = require("express").Router();
var UserInfoController = require("../controllers/UserInfoController");

routes.get("/delete/:id", UserInfoController.delete);

routes.get("/edit/:id", UserInfoController.edit);

module.exports = routes;