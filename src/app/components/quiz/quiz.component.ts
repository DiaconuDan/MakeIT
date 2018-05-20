import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private divNumberForRightAnswer: number = 0;
  private idRightAnswer: string = "";
  private isAnswerGiven: boolean = false;
  private count = 0;
  private numberOfQustions: number = 3;
  private questionsSample;
  private questionText;
  private Answers: String[] = [" ", " ", " ", " "];
  constructor(private QuestionsService: QuestionsService) {


  }



  getQuestionInQuiz() {

    /*
    var question = {
      "question": "What is the easiest programming language ? ",
      "answers": ["Java", "C++", "Python"],
      "rightAnswer": "Javascript"
    };
    */


    var idWrongAnswer, currentChoice = 0, i = 0, k = 0, wrongAnswer;
    var question = this.questionsSample[this.count]; // Getting the current question
    this.questionText = question.question ;

    this.divNumberForRightAnswer = Math.floor(Math.random() * 4); // Choosing the random div for the right answers, between 0 and 3 \
    console.log(this.divNumberForRightAnswer);
    this.Answers[this.divNumberForRightAnswer] = question.rightAnswer;
    this.idRightAnswer = "choice" + this.divNumberForRightAnswer ;

    for (i = 0; i <= 2; i++) {
      if (k == this.divNumberForRightAnswer) {
        k++;
      }
      this.Answers[k] = question.answers[i];
      k++;

    }
    console.log(this.Answers);
    this.isAnswerGiven = false; // We don't have a response given by user yet
  }

  ngOnInit() {
    this.QuestionsService.getQuestionsSample().subscribe(questions => {
      this.questionsSample = questions;
      //console.log(this.questionsSample) ;
      this.getQuestionInQuiz();
    },
      err => {
        console.log(err);
        return false;
      }
    );
  }
  verifyAnswerGiven(i: number) {
    if (this.isAnswerGiven == false) {
      this.isAnswerGiven = true;
      if (i == this.divNumberForRightAnswer) // boon
      {
        console.log('Right answer');
        
        document.getElementById(this.idRightAnswer).style.color = "#7FFFD4";
        console.log(this.idRightAnswer);
        setTimeout(() => {
          document.getElementById(this.idRightAnswer).style.color = "#fff";
          if (this.count == this.numberOfQustions) {
            alert('Quiz finished');
          }
          else {
            this.count++;
            this.getQuestionInQuiz();
          }

        }, 2000);
      }
      else {
        console.log('Wrong answer');
        var idWrongAnswer = "choice" + i;
        document.getElementById(this.idRightAnswer).style.color = "#7FFFD4";
        document.getElementById(idWrongAnswer).style.color = "red";
        setTimeout(() => {
          document.getElementById(this.idRightAnswer).style.color = "#fff";
          document.getElementById(idWrongAnswer).style.color = "#fff";
          if (this.count == this.numberOfQustions) {
            alert('Quiz finished');
          }
          else {
            this.count++;
            this.getQuestionInQuiz();
          }
        }, 2000);
      }
    }
  }
}


