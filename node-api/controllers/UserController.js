var UserModel = require("../models/UserModel");
var mongo = require("mongodb");
var sha1 = require("sha1");

exports.getAll = (req, res)=>{
    UserModel.find({}, function(err, result){
        res.send(result);
    });
}

exports.get = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    // console.log(id);
    UserModel.find({ _id : id }, function(err, result){
        // console.log(result[0]);
        res.send(result[0]);
    });
}

exports.add = (req, res)=>{
    var obj = req.body;
    req.body.password = sha1(req.body.password);
    delete req.body.re_password;
    delete req.body._id;
    UserModel.save(obj, function(err, result){
        // console.log(result);
        res.send(result);
    });
}

exports.update = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    delete req.body._id;
    UserModel.update({ _id : id }, req.body, function(err, result){
        res.send(result._id);
    });
}

exports.delete = (req, res)=>{
    var id = mongo.ObjectId(req.params.id);
    UserModel.delete({ _id : id }, function(err, result){
        // console.log(result);
        res.send(result);
    })
}