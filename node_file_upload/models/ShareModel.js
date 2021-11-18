var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("share").insertOne(obj, cb);
    });
}
module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("share").find(where).toArray(cb);
    });
}

module.exports.update = function(where, obj,  cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("share").update(where, {$set : obj}, cb);
    });
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("share").remove(where, cb);
    });
}