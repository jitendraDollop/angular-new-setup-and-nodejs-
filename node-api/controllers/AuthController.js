var UserModel = require("../models/UserModel");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

exports.index = (req, res)=>{
    var obj = req.body;
    req.body.password = sha1(req.body.password);
    UserModel.find({ username : obj.username }, function(err, result){
        if(result.length == 1){
            if(result[0].password == obj.password){
                var token  = jwt.sign({ _id : result[0].id, username : result[0].username}, "dollop infotech");
                res.status(200).json(token);
            }
            else
            {
                res.status(401).json({type : 2});
            }
        }
        else
        {
            res.status(401).json({type : 1});
        }
    })
}