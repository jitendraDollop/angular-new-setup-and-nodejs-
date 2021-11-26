var countryModel = require("../models/CountryModel");
var stateModel = require("../models/StateModel");
var cityModel = require("../models/CityModel");
var arr = [];
exports.index = (req, res)=>{
    countryModel.find({}, function(err, result){
        var country = result;
        arr[0] = country;
        stateModel.find({}, function(err, result){  
            var state = result;
            arr[1] = state;
            // console.log(arr[1]);
            cityModel.find({}, function(err, result){
                // console.log(result);
                var city = result;
                arr[2] = city;
                res.send(arr);
            })
        })
        
    });
}