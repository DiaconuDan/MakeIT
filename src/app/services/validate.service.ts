import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    // console.log(user) ;
    if (user.username == undefined || user.firstName == undefined ||
      user.email == undefined || user.lastName == undefined ||
      user.password == undefined || user.password.length < 5) {
      return false;
    }
    else {
      return true;
    }
  }

  validateEmail(email)
  {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
