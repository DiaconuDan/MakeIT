const express = require('express') ;
const router = express.Router();
const User = require('../models/user') ;
const passport = require('passport') ;
const jwt = require('jsonwebtoken') ;
// Register

router.post('/register', (req,res,next) => {
   let newUser = new User ({
       email: req.body.email,
       username: req.body.username,
       password: req.body.password,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       rank: 1500
   })

   User.addUser(newUser, (err,user) => {
    if(err) {
        res.json({success:false, msg:'Failed to register user'});
    } else {
        res.json({success:true, msg:'User registered'});
    }
   });
});


// Authenticate

router.post('/authenticate', (req,res,next) => {
   const username = req.body.username ;
   const password = req.body.password ;

//    User.getUserByUsername(username, (err,user) =>  {
//        if (err) throw err ;
//        if (!user) {
//            return res.json({success: false, msg: 'User not found'});
//        }

//       // User.comparePassword(password,  user.password, ())
//    }
});



// Profile

router.get('/profile', (req,res,next) => {
    res.send('PROFILE');
});


// Validate

router.get('/validate', (req,res,next) => {
    res.send('VALIDATE');
});

module.exports = router ;