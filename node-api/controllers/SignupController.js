var UserModel = require("../models/UserModel");
var sha1 = require("sha1");

exports.save = (req, res)=>{
    var obj = req.body;
    req.body.password = sha1(req.body.password);
    delete req.body.re_password;
    UserModel.save(obj, function(err, result){

        res.send(result);
    })
    
}