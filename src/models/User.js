const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var UserSchema = mongoose.Schema({

   name : {type : String , required : true},
   email : {type:String , required : true ,unique : true},
   password : {type : String , required : true}
},
   {timestamps : true}

    
)

UserSchema.methods.encrypPassword = async password =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password , salt)
};

UserSchema.methods.mathPassword = async function(password) {
   return await bcrypt.compare(password ,this.password)
} 




module.exports = mongoose.model('User', UserSchema,'user-collection');