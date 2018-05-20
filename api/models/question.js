var mongoose = require('mongoose') ;
var Schema = mongoose.Schema;
var crypto = require('crypto');

var questionSchema = new Schema({
    question:{
        type: String,
        required: true
    },
    difficulty : {
        type:String,
        required:true
    },
    category : {
        type: String,
        required: true
    },
    answers:[ {
        type: String
    }],
    rightAnswer: {
        type:String,
        required:true
    }
});


const Question = module.exports = mongoose.model('Question', questionSchema) ;


module.exports.getQuestionById = function(id,callback) {
    Question.findById(id,callback) ;
}
