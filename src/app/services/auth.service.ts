import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http' ;
import 'rxjs/add/operator/map' ;
import {tokenNotExpired} from 'angular2-jwt' ;
 
@Injectable()
export class AuthService {

  authToken: any ;
  user: any ;

  constructor(private http: Http) { }

registerUser(user) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json') ;
  return this.http.post("http://localhost:8082/users/register", user, { headers: headers})
   .map( res => res.json()) ;
}

authenticateUser(user) {
  console.log(user) ;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json') ;
  return this.http.post("http://localhost:8082/users/authenticate", user, { headers: headers})
   .map( res => res.json()) ;
}

getProfile(){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json') ;
  return this.http.get("http://localhost:8082/users/profile", { headers: headers})
   .map( res => res.json()) ;
}


storeUserData(token, user) {

  console.log("intrat") ;
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user)) ;
  this.authToken = token ;
  this.user = user;
}

loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token ;
}

loggedIn(){
//  console.log( tokenNotExpired('id_token')) ;
  return tokenNotExpired('id_token');
}

logout(){
  this.authToken = null ;
  this.user = null;
  localStorage.clear();
}

}
