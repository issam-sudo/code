const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/onetable"
mongoose.Promise = global.Promise

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function(err, db) {
    if (err) {
        console.error("non connect" + URL)
    } else {
        console.log('connect' + URL)
    }
});