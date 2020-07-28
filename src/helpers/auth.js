const helpers = {}

helpers.isAuthenticated = (req ,res ,next) => {

    if (req.isAuthenticated()) {
      return  next()
    }
    req.flash('errors_msg' ,'not authorize')

    res.redirect('/users/sgnin');
}

module.exports = helpers;