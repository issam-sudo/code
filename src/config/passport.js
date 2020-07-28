const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'Not User Found' })
    } else {
        const match = await user.mathPassword(password)
        if (match) {
            return done(null, user)
        } else {
            return done(null, false, { message: 'password not match' })
        }
    }

}

));

passport.serializeUser((user ,done)=>{
    return done(null , user.id)
});


passport.deserializeUser((id, done) => {
    User.findById(id , function (err ,user) {
        done(err ,user)
    })
});