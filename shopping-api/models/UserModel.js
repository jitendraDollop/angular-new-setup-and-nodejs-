var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("shopping");
        db.collection("user").insertOne(obj, cb);
    });
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("shopping");
        db.collection("user").find(where).toArray(cb);
    });
}