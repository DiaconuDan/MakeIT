var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('../api/models/users');
var passport = require('passport');
var myPassport = require('../api/config/passport');

var path = require('path');


// connect to db

mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);