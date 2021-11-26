var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("dropdown");
        db.collection("country").insertOne(obj, cb);
    })
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("dropdown");
        db.collection("country").find(where).toArray(cb);
    })
}

