const mongoose = require('mongoose')
const {HOST ,DATABASE} = process.env

const URL_DB = 'mongodb://'+HOST+':27017/'+DATABASE;
mongoose.Promise = global.Promise


mongoose.connect(URL_DB,function (err,res) {
    if (err) {
     console.error("error connection to database"+ URL_DB);
        
    }else{
        console.log("connected to " +URL_DB)
    }
})