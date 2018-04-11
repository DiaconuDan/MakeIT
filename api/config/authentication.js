const express = require('express') ;
const router = express.Router();
var User = require('../models/user');

module.exports.register = function(req,res) {
    const {
        firstName, lastName, email, password
    } = req.body;
   // console.log(req.body);
    var user = new User( { firstName, lastName, email, password, rank: 1500}) ;
    user.password = user.setPassword(password);
    user.save(function(err,user) {
        if( err) {
            console.log(err);
        }
    });
}
