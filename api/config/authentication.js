const express = require('express') ;
const router = express.Router();
var User = require('../models/users');

module.exports.register = function(req,res) {
    const {
        firstName, lastName, email, password
    } = req.body;
    // var user = new User( { firstName, lastName, email, password, rank: 1500});
    //   var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
    console.log(req.body);
    var user = new User( { firstName, lastName, email, password, rank: 1500}) ;
    user.password = user.setPassword(password);
    user.save(function(err,user) {
        if( err) {
            console.log(err);
        }
    });
}
