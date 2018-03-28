var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function (req, res) {
    var user = new User();

    user.email = req.body.email ;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.rank = req.body.rank;

    user.setPassword(req.body.password);
    
    user.save(function(err) {
        var token ;
        token = user.generateJwt();
        res.status(200) ;
        res.json({
            "token": token
        });
    });
};


module.exports.login = function(req,res) {
    passport.authenticate('local', function(err,user,info){
        var token ;
        if ( err ) { // passport returns error
            res.status(404).json(err);
            return ;
        }

        if (user) { // we found user
            token=user.generateJwt();
            res.status(200) ;
            res.json({
                "token" : token
            });
        } else { // user not found
            res.status(401).json(info) ;
        }
    })(req,res);
}




