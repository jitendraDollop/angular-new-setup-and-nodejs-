var UserModel = require("../models/UserModel");
var mongo = require("mongodb");


exports.index = (req, res)=>{
    UserModel.find({}, function(err, result){
        // console.log(result[0]);
        var pageData = { title : "Home Page", pagename : "Home/index", result : result};
        res.render("layout", pageData);
    })
}

