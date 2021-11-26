var routes = require("express").Router();
var jwt = require("jsonwebtoken");

routes.use("/api/signup", require("../routes/Signup"));
routes.use("/api/auth", require("../routes/Auth"));
routes.use("/api/user", backdoor, require("../routes/User"));
routes.use("/api/file", backdoor, require("../routes/File"));
routes.use("/api/select", backdoor, require("../routes/Select"));
routes.use("/api/dropdown", backdoor, require("../routes/Dropdown"));

function backdoor(req, res, next){
    if(!req.headers.authorization || req.headers.authorization == ""){
        return res.status(401).send("Somthing wents wrong");
    }
    else
    {
        var token = req.headers.authorization;
        var info = jwt.verify(token, "dollop infotech");
        if(!info){
            res.status(401).send("Somthing wents wrong");
        }
        next();
        

    }
}

module.exports = routes;