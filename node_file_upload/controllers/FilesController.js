
var path = require("path");
var FilesModel = require("../models/FilesModel");
var rand = require("randomstring");

exports.index = (req, res)=>{
    var type = req.params.type; 
    var id = req.session.userid;
    // console.log(id);
    FilesModel.find({ userid : id , type : type }, function(err, result){
        var pageData = { title : "Files Page", pagename : "Files/index", type : type, message : req.flash("msg"), result : result};
        res.render("layout", pageData);
    });
}

exports.upload = (req, res)=>{
    // console.log(req.files);
    var type = req.params.type;
    var name = req.files.file.name;
    var size = req.files.file.size;
    var mv = req.files.file.mv;

    var arr = name.split(".");
    var ext = arr[arr.length -1];
    var newname = rand.generate(20)+"."+ext;
    var filePath = path.resolve()+"/files/"+type+"/"+newname;

    req.body.filename = newname;
    req.body.userid = req.session.userid;
    // req.body.file = req.body;
    req.body.type = req.params.type;

    switch(type)
    {
        case "ppt" : if(ext == "ppt")
        {
            mv(filePath, function(err){
                if(err)
                {
                    console.log("File Upload Error", err);
                    return;
                }
                FilesModel.save(req.body, function(err, result){
                    res.redirect("/files/"+type);
                });
            })
        }
        else
        {
            req.flash("msg", "This file is not Allowed !");
            res.redirect("/files/"+type);
        }
        break;


        case "pdf" : if(ext == "pdf")
        {
            mv(filePath, function(err){
                if(err)
                {
                    console.log("File Upload Error", err);
                    return;
                }
                FilesModel.save(req.body, function(err, result){
                    res.redirect("/files/"+type);
                });
            })
        }
        else
        {
            req.flash("msg", "This file is not Allowed !");
            res.redirect("/files/"+type);
        }
        break;


        case "doc" : if(ext == "doc" || ext == "docx")
        {
            mv(filePath, function(err){
                if(err)
                {
                    console.log("File Upload Error", err);
                    return;
                }
                FilesModel.save(req.body, function(err, result){
                    res.redirect("/files/"+type);
                });
            })
        }
        else
        {
            req.flash("msg", "This file is not Allowed !");
            res.redirect("/files/"+type);
        }
        break;


        case "images" : if(ext == "png" || ext == "jpg" || ext == "gif" || ext == "jpeg")
        {
            mv(filePath, function(err){
                if(err)
                {
                    console.log("File Upload Error", err);
                    return;
                }
                FilesModel.save(req.body, function(err, result){
                    res.redirect("/files/"+type);
                });
            })
        }
        else
        {
            req.flash("msg", "This file is not Allowed !");
            res.redirect("/files/"+type);
        }
        break;

        case "other" : if(ext == "other")
        
        {
            req.flash("msg", "This file is not Allowed !");
            res.redirect("/files/"+type);
        }
        break;

    }










    

}

