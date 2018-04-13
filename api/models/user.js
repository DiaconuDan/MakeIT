var mongoose = require('mongoose') ;
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var userSchema = new Schema({
    email: { 
        type : String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type:String,
    },
    lastName: {
        type:String,
    },
    rank: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


/*
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash == hash ;  
}
*/

const User = module.exports = mongoose.model('User', userSchema) ;


module.exports.getUserById = function(id,callback) {
    User.findById(id,callback) ;
}

module.exports.getUserByUsername = function(username,callback) {
    const query = { username: username} 
    User.findOne(query,callback) ;
}

module.exports.addUser = function(newUser, callback) {
   bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(newUser.password, salt, (err,hash) => {
        if (err) throw err;
        newUser.password = hash ;
        newUser.save(callback);
    });
   });
}


module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err,isMatch) => {
        if(err) throw err ;
        callback(null, isMatch) ;
    });
}
