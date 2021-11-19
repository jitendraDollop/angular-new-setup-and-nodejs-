var SelectModel = require("../models/SelectModel");

exports.index = (req, res)=>{
    SelectModel.find(req.body, function(err, result){
        // console.log(result);
        res.send(result[0]);

        
    })
}