import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  private username: string = "";
    private password: string = "";
    private confirmPassword: string = "";
    private email: string = "";
    private ErrorMessage: string = "";
    private SuccessMessage: string = "";

    constructor(private router: Router) {
        if (localStorage.getItem("isAuth")) {
            router.navigateByUrl('/');
        }
    }

    private signup() {
        if (this.username.length < 3 || this.password.length < 3) {
            this.SuccessMessage = "";
            this.ErrorMessage = "Username or password too short";
            return;
        }
        if (this.password !== this.confirmPassword) {
            this.SuccessMessage = "";
            this.ErrorMessage = "Passwords do not match";
            return;
        }
        this.ErrorMessage = "";
        this.SuccessMessage = "Account created. Please login.";
        setTimeout(() => {
            this.router.navigateByUrl('/login');
        }, 2700);

    }
}
