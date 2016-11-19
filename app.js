var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var methodOverrise = require('method-overrise');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local');

//requiring models


//requiring routes

//databaseconnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://username:pass@ds151697.mlab.com:51697/databasename');

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverrise("_method"));
app.use(flash());

app.use(session({
    secret: "there is something missing in my hear",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});
