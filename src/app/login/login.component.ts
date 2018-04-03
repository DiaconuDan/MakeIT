import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})

@Injectable()
export class LoginComponent {
    constructor(private http: HttpClient, private router: Router) {

    }
    private email: string;
    private password: string;
    login() {
        
        this.http.post("http://localhost:8082/api/login", {email: this.email}, {
            headers: new HttpHeaders({
                "Content-Type": 'application/json'
            })
        }).subscribe((data) => {
            console.log(data);
        });

    }


}