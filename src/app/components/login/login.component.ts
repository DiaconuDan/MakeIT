import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

interface ILoginResponse {
    message: String
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})

@Injectable()
export class LoginComponent {
    constructor(private http: HttpClient,
        private router: Router,
        private authService: AuthService) {

    }
    private username: string=" ";
    private password: string=" ";
    login() {
        const user = {
            username: this.username,
            password: this.password
        }
       
        
       
        this.authService.authenticateUser(user).subscribe(data => {
            console.log(data) ;
            if(data.success) {
                this.authService.storeUserData(data.token, data.user) ;
                console.log("Login worked");
                this.router.navigate(["/profile"]) ;

            }else {
                this.router.navigate(["/login"]) ;
            }
        });
        
      
    }
}