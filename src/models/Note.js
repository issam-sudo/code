const mongoose = require('mongoose')

var NoteSchema = mongoose.Schema({
   title : { type: String , required :true},
   description : {type :String ,required : true },
   user: {type : String , required : true}

},
  
   {timestamps : true}

)



module.exports = mongoose.model('Note', NoteSchema ,'notecollection');