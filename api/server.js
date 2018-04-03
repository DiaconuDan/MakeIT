var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('../api/models/users');
var login = require('./controllers/login') ;
var register =require('./controllers/register') ;
var path = require('path');


// connect to db

mongoose.connect('mongodb://localhost:27017/MakeIT');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

router.post('/users', function (req, res) {
        console.log(req.body);
        if (undefined) {
            res.status(403);
            res.json({ message: 'Please provide a name' });
        } else {
            var user = new User();
        // create a new instance of the User model
        user.name = req.body.name;  // set the users name (comes from the request)
        user.age = 18;
        // save the bear and check for errors
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
        }
        

    });

    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          res.status(401);
          res.json({"message" : err.name + ": " + err.message});
        }
      });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use(passport.initialize());
app.use('/api', router);
app.use('/api', login) ;
app.use('/api', register) ;
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);