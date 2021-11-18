var UserModel = require("../models/UserModel");
var mongo = require("mongodb");

exports.delete =(req, res)=>{
    var id = req.params.id;
    UserModel.delete({ _id : mongo.ObjectId(id)}, function(err, result){
        res.redirect("/");
    })
}

exports.edit =(req, res)=>{
    var id = req.params.id;
    UserModel.find({ _id : mongo.ObjectId(id)}, function(err, result){
        var pageData = { title : "Edit Page", pagename : "Home/edit", result : result[0]};
        res.render("layout", pageData);
    })
}