import { Component, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService} from 'angular2-flash-messages' ;


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent {

  private email: string;
  private username: string;
  private password: string;
  private firstName: string;
  private lastName: string;



  constructor(private validateService: ValidateService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) {
  }

  register() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      username: this.username
    }

    if (!this.validateService.validateRegister(user)) {
      //this.flashMessage.show('Please fill in all fields correctly', {cssClass: 'alert-danger', timeout:3000}) ;
      console.log('Please fill in all the fields correctly');
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Not a valid mail');
      // this.flashMessage.show('Not a valid email', {cssClass: 'alert-danger', timeout:3000}) ;
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('You are now registered');
        setTimeout( 2000);
        this.router.navigate(["/login"]);
      } else {
        console.log('Register failed');
        this.router.navigate(["/register"]);
      }
    });

    /*
    setTimeout(() => {
      this.http.post("http://localhost:8082/users/register", { email: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password, username: this.username }, {
        headers: new HttpHeaders({
          "Content-Type": 'application/json'
        })
      }).subscribe((data) => { (console.log(data)); })
      this.router.navigate(["/login"]);
    }, 2700);
    */
  }


}

