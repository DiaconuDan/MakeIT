const express = require('express') ;
const router = express.Router();
var User = require('../models/users');
router.post('/login', function(req,res) {
    var email = req.body.email ;
    
    User.findOne({email : email}, function(err,user){
        if ( err) {
            res.status(500).json({
                message: "Server error"
            });
        }
        if ( !user) {
            res.status(404).json({
                message: "User not found"
            });
        }
        else {
            res.status(200).json({
                email: email 
            })
        }
    });
    
});

module.exports = router ;
