var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var PORT = process.env.PORT || 3000;
//requiring models
var User = require('./models/user.js');

//requiring routes
var indexRoute = require('./routes/index.js');

//databaseconnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tauseefch:tumbin23@ds159217.mlab.com:59217/bookstore');

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(session({
    secret: "there is something missing in my hear",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoute);

app.listen(PORT, function(){
    console.log('server has started');
});
