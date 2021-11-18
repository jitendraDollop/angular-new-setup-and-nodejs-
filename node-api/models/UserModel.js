var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("user");
        db.collection("user1").insertOne(obj, cb);
    });
}
module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("user");
        db.collection("user1").find(where).toArray(cb);
    });
}

module.exports.update = function(where, obj,  cb){
    database(function(err, con){
        var db = con.db("user");
        db.collection("user1").update(where, {$set : obj}, cb);
    });
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("user");
        db.collection("user1").remove(where, cb);
    });
}