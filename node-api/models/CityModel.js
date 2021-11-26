var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("dropdown");
        db.collections("city").insertOne(obj, cb);
    })
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("dropdown");
        db.collection("city").find(where).toArray(cb);
    })
}
module.exports.update = function(where, cb){
    database(function(err, con){
        var db = con.db("dropdown");
        db.collection("city").update(where, { $set : obj}, cb);
    })
}
