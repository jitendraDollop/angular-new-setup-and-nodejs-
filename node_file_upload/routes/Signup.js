var routes = require("express").Router();
var SignupController = require("../controllers/SignupController");

routes.get("/", SignupController.index);
routes.post("/", SignupController.save);



module.exports = routes;