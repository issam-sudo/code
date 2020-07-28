const express = require('express');

const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash');
const morgan = require('morgan')
const passport = require('passport')
require('./config/passport')
require('./database')
//settings
app.set('port', process.env.PORT || 4300);

app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialsDir: path.join(app.get('views'), 'partials'),
     extname: '.hbs',
     handlebars: allowInsecurePrototypeAccess(Handlebars)

}));

app.set('view engine', '.hbs');

//midlware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
//static

app.use(methodOverride('_method'));
app.use(session({
     secret: 'secret',
     resave: true,
     saveUninitialized: true,

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(require('./routes/index.route'));
app.use((req, res, next) => {
     res.locals.success_msg = req.flash('success_msg')
     res.locals.errors_msg = req.flash('errors_msg')
     res.locals.error = req.flash('error')
     res.locals.user = req.user || null 
     next();
});
app.use(require('./routes/notes.route'));
app.use(require('./routes/users.route'));
app.use(express.static(path.join(__dirname, '/public')));
//routes




module.exports = app;