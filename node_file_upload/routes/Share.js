var routes = require("express").Router();
var ShareController = require("../controllers/ShareController");

routes.get("/me", ShareController.share_with_me);

routes.get("/:id", ShareController.index);

routes.post("/:id", ShareController.save);

module.exports = routes;