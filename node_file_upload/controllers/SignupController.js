var UserModel = require("../models/UserModel");
var sha1 = require("sha1");
exports.index = (req, res)=>{
    var pageData = { title : "Signup Page", pagename : "Signup/index"};
    res.render("layout", pageData);
}

exports.save = (req, res)=>{
    req.body.password = sha1(req.body.password);
    UserModel.save(req.body, function(err, result){
        res.redirect("/login");
    })
}