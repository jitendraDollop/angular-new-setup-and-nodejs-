var selectModel = require("../models/selectModel");
var mongo = require("mongodb");
exports.index = (req, res)=>{
    var id = req.body;
    selectModel.save({ _id : mongo.ObjectId(id)}, function(err, result){
       
        for (var country in id) {
        countrySel.options[countrySel.options.length] = new Option(country, country);
        }
        countrySel.onchange = function () {
        stateSel.length = 1;
        stateSel.length = 1; 
        if (this.selectedIndex < 1) return; 
        for (var state in id[this.value]) {
        stateSel.options[stateSel.options.length] = new Option(state, state);
        }
        }
        countrySel.onchange(); 
        stateSel.onchange = function () {
        stateSel.length = 1; 
        if (this.selectedIndex < 1) return;
        var state = id[countrySel.value][this.value];
        for (var i = 0; i < state.length; i++) {
        stateSel.options[stateSel.options.length] = new Option(state[i], state[i]);
        }
        }
        var pageData = { title : "Dashboard Page", pagename : "Dashboard/index"};
        res.render("layout", pageData);
    })
}                       


