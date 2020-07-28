const mongoose = require('mongoose');

var Shematask = mongoose.Schema({
    title : {
        type: String,
        required : true,
        maxlength :20,
        trim : true
    },
    _listId: {
        type : mongoose.Types.ObjectId,
        required :true
    }
})

module.exports = mongoose.model('task_model', Shematask , 'taskcollection')