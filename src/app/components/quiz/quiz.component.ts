import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var question = {
      "question": "The easiest programming language ? ",
      "answers": ["Java", "C++", "Python"],
      "rightAnswer": "Javascript"
    };

    var divNumberForRightAnswer = Math.floor(Math.random() * 4), i;
    var idRightAnswer = "choice" + divNumberForRightAnswer;
    var idWrongAnswer;

    document.getElementById(idRightAnswer).innerHTML = question.rightAnswer;



    var currentChoice = 0;
    for (i = 0; i <= 2; i++) {
      if (currentChoice == divNumberForRightAnswer) {
        currentChoice++;
      }
      idWrongAnswer = "choice" + currentChoice;
      document.getElementById(idWrongAnswer).innerHTML = question.answers[i];
      console.log(question.answers[i]);
      console.log(idWrongAnswer) ;
      currentChoice++ ;
    }

  }



}


