const express = require('express');
const router  = express.Router();
var User = require('../models/users') ;
var Authentication = require('../config/authentication') ;

router.post('/register', function(req,res) {
    var email = req.body.email ;
    User.findOne( {email:email}, function(err,user){
        if ( err) {
            res.status(500).json({
                message: "Server error"
            });
        }
        if ( user) {
            res.status(404).json({
                message: "User already exists"
            });
        }
        else {
                res.status(200).json({
                  message: "Success"
             })
            Authentication.register(req,res);

        }
    })
})

module.exports = router ;
