var UserMode = require("../models/UserModel");
var sha1 = require("sha1");

exports.index = (req, res)=>{
    var pageData = { title : "Login Page", pagename : "Login/index", message : req.flash("msg")};
    res.render("layout", pageData);
}
 

exports.login = (req, res)=>{
    var user = req.body.username;
    var pass = req.body.password;
    UserMode.find({ username : user}, function(err, result){
        // console.log(result);
        if(result.length == 1)
        {
            // console.log(result[0].password == sha1(pass));
            if(result[0].password == sha1(pass))
            {
                req.session.userid = result[0]._id;
                req.session.name = result[0].name;
                req.session.email = result[0].username;
                req.session.is_user_logged_in = true;
                res.redirect("/");
            }
            else
            {
                req.flash("msg", "This Password is Incorrect !");
            }
        }
        else
        {
            req.flash("msg", "This Username and Password is Incorrect !");
            res.redirect("/login");
        }
    })
}