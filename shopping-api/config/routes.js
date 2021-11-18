var routes = require("express").Router();

routes.use("/api/signup", require("../routes/Signup"));
routes.use("/api/login", require("../routes/Auth"));

module.exports = routes;