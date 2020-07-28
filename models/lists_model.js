const mongoose = require('mongoose');

var Shemalist = mongoose.Schema({
   title : {
       type: String,
       required : true,
       trim : true
   }
})

module.exports = mongoose.model('list_model', Shemalist , 'listcollection')