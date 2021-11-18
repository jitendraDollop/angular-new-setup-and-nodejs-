var FileModel = require("../models/FilesModel");
var mongo = require("mongodb");

exports.get = (req, res)=>{
    var id = req.params.id;
    FileModel.delete({ _id : mongo.ObjectId(id)}, function(err, result){
        res.redirect("/files/images");
    });
}

exports.edit = (req, res)=>{
    var id = req.params.id;
    FileModel.find({ _id : mongo.ObjectId(id)}, function(err, result){
        // console.log(result);
        var pageData = { title : "Edit Page", pagename : "Files/edit", result : result[0]};
        res.render("layout", pageData);
    })
}