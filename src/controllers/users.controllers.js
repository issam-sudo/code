const UsersCrtls = {}
const User = require('../models/User')
const passport = require('passport')

UsersCrtls.renderSgnUpForm =  (req, res) => {
    res.render('users/sgnUp');
}
UsersCrtls.SgnUp = async (req, res) => {
    const errors = []
    const { name, email, password, confirm_password } = req.body
    if (password != confirm_password) {
        errors.push({ text: 'error password input' })
    }
    if (password.length < 4) {
        errors.push({ text: 'password < 4' })

    }
    if (errors.length > 0) {
        res.render('users/sgnUp' ,{errors ,name , email ,password ,confirm_password});
    }else{
        const emailUser = await User.findOne({email : email})
        if (emailUser){
            req.flash('errors_msg', 'email already exist')
             res.redirect('/users/sgnup');


        }else {
        var newUser = new User()
        newUser.name = req.body.name 
        newUser.email = req.body.email
        newUser.password = req.body.password
        newUser.password = await newUser.encrypPassword(password)
        await newUser.save()
        req.flash('success_msg', 'user added success')
        res.redirect('/users/sgnin');
        }
    }
}
UsersCrtls.renderSgninForm = (req, res) => {
    res.render('users/sgnIn');
}
UsersCrtls.Sgnin = passport.authenticate('local' , {
    failureRedirect : '/users/sgnin',
    successRedirect : '/notes',
    failureFlash : true
})
UsersCrtls.logout = (req, res) => {
   req.logout()
   req.flash('success_msg', 'logout user')
   res.redirect('/users/sgnin');
}
module.exports = UsersCrtls;