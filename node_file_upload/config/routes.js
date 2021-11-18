var routes = require("express").Router();

routes.use("/", require("../routes/Home"));
routes.use("/login", require("../routes/Login"));
routes.use("/signup", require("../routes/Signup"));
routes.use("/files", backdoor, require("../routes/Files"));
routes.use("/profile", backdoor, require("../routes/Profile"));
routes.use("/dashboard", backdoor, require("../routes/Dashboard"));
routes.use("/userInfo", require("../routes/UserInfo"));
routes.use("/file", backdoor, require("../routes/File"));
routes.use("/share", backdoor, require("../routes/Share"));


function backdoor(req, res, next){
    if(! req.session.is_user_logged_in){
        res.redirect("/login");
        return;
    }
    next();
}


routes.use("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
})

module.exports = routes;