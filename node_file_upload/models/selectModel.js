var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("select").insertOne(obj, cb);
    });
}
module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("select").find(where).toArray(cb);
    });
}

module.exports.update = function(where, obj,  cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("select").update(where, {$set : obj}, cb);
    });
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("nodeUser");
        db.collection("select").remove(where, cb);
    });
}