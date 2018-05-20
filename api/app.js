var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var User = require('../api/models/user');
//var login = require('./controllers/login') ;
//var register =require('./controllers/register') ;
var path = require('path');
var passport = require('passport') ;
var config = require('./config/database') ;
var cors = require('cors') ;

const users = require('./routes/users') ;
const questions = require('./routes/questions') ;
// Connect To Database

mongoose.connect(config.database);

// Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport) ;

// CORS
app.use((cors())) ;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 8082;       
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});



// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use(passport.initialize());
app.use('/users', users) ;
app.use('/questions', questions) ;
app.use('/api', router);
// app.use('/api', login) ;
// app.use('/api', register) ;
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);