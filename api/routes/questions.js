

const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const config = require('../config/database');
const mongoose = require('mongoose');
router.post('/addQuestion', (req, res, next) => {
    let newQuestion = new Question({
        difficulty: req.body.difficulty,
        category: req.body.category,
        question: req.body.question,
        rightAnswer: req.body.rightAnswer,
        answers: req.body.answers
    })

    try {
        newQuestion.save();
        console.log("Question added");
        res.json({ success: true, msg: 'Added question' });

    } catch (error) {
        console.log("Fail to add question. " + error);
        res.json({ success: false, msg: 'Failed to add question' });
    }

});


router.get('/getRandomQuestions', (req, res, next) => {
    console.log('Am intrat pe ruta getQuestions') ;
    mongoose.connect(config.database, function (err, db) { 
        var sampleOfQuestions=[];
        if (err) throw err;
           
        db.collection("questions").aggregate( [ { $sample: {size: 4} } ] ).toArray( function(err,result) { 
            if (err) throw err;
            sampleOfQuestions = result ;
            res.json(sampleOfQuestions);
            db.close();
         
      });
   
    });
    
      
   
});



module.exports = router;