import { Component, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent {
  credentials: TokenPayload = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  };

  private email: string = "";
  private username: string ="" ;
  private password: string = "";
  private confirmPassword: string = "";
  private firstName: string="";
  private lastName: string="";
  private ErrorMessage: string = "";
  private SuccessMessage: string = "";

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) {

  }

  register() {
    if ( this.password.length < 3) {
      this.ErrorMessage = "Password too short";
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.ErrorMessage = "Passwords do not match";
      return;
    }
    
    this.SuccessMessage = "Account created. Redirecting to login...";
    setTimeout(() => {
       this.http.post("http://localhost:8082/users/register", {email: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password, username: this.username}, {
         headers: new HttpHeaders ({
           "Content-Type" : 'application/json'
         })
       }).subscribe((data) => {( console.log(data)) ; })
       this.router.navigate(["/login"]);
      }, 2700);
    }
}

