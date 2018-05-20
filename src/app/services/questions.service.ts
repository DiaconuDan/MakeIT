import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http' ;

@Injectable()
export class QuestionsService {

  questionsSample: Object ;

  constructor( private http: Http) { }

  getQuestionsSample() {
    console.log("Intrat in service") ;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json') ;
   
    return this.http.get("http://localhost:8082/questions/getRandomQuestions",{ headers: headers}).map( res => res.json()) ;
  }


}
