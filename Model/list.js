const mongoose = require('mongoose');

var shemonetble = mongoose.Schema({
    title: {

        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('list', shemonetble, 'list_collection')