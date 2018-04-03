var mongoose = require('mongoose') ;
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new Schema({
    email: { 
        type : String,
        unique: true,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },

   lastName: {
        type:String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    hash: String,
    salt: String 
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash == hash ;  
}

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7) ;
    
    return jwt.sign({
        _id : this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        rank: this.rank,
        exp: parseInt(expiry.getTime()/1000),
    }, "MY_SECRET") ;
   
};

module.exports = mongoose.model('User', userSchema) ;