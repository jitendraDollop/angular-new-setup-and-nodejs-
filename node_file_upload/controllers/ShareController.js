var FileModel = require("../models/FilesModel");
var UserModel = require("../models/UserModel");
var ShareModel = require("../models/ShareModel");
var mongo = require("mongodb");

exports.index = (req, res)=>{
    var id = req.params.id;
    FileModel.find({ _id : mongo.ObjectId(id) }, function(err, result){
        var pageData = { title : "Share Page", pagename : "Share/index", result : result[0], message : req.flash("msg")};
        res.render("layout", pageData);
    })
}

exports.save = (req, res)=>{
    req.body.userid = req.session.userid;
    UserModel.find({ username : req.body.share_email}, function(err, result){
        if(result.length ==0){
            req.flash("msg", "This Email Id is not Exist !");
            res.redirect("/share/"+req.params.id);
        }
        else
        {
            ShareModel.save(req.body, function(err, result){
                res.redirect("/dashboard");
            })
        }
    })

}

exports.share_with_me = (req, res)=>
{
    ShareModel.find({ share_email : req.session.email }, function(err, result)
    {
        var arr=[];
        result.forEach(function(share)
        {
            var fileid = share.file_id;
            // console.log(fileid);
            var hows_share_id = share.userid;
            UserModel.find({ _id : mongo.ObjectId(hows_share_id)}, function(err, result1)
            {
                var obj = { name : result1[0].name, email : result1[0].username };
                console.log(result1);
                FileModel.find({ _id : mongo.ObjectId(fileid)}, function(err, result2)
                {
                    console.log(result2[0]);
                    // obj.filename = result2[0].filename;
                    // obj.type = result2[0].type;
                    // obj.filename = result2[0].name;
                });
                
                // arr.push(obj);
                arr.push(obj);
            });
        })
        var pageData = { title : "Share With Me", pagename : "Share/share_with_me"};
        res.render("layout", pageData);
    })
}