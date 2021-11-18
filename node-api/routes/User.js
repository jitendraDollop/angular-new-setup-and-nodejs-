var routes = require("express").Router();
var UserController = require("../controllers/UserController");

routes.get("/", UserController.getAll);
routes.get("/:id", UserController.get);
routes.post("/", UserController.add);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.delete);

module.exports = routes;