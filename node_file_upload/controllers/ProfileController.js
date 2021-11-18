var UserModel = require("../models/UserModel");
var mongo = require("mongodb");

exports.index = (req, res)=>{
    var id = req.session.userid;
    UserModel.find({ _id : mongo.ObjectId(id)}, function(err, result){
        var pageData =  { title : "Profile Page", pagename : "profile/index", result : result[0]};
        res.render("layout", pageData);
    })
    
}