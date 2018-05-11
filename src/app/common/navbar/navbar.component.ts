import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent {
    constructor(
        private http: HttpClient,
        private router: Router,
        private authService: AuthService) {

    }


    onLogoutClick(){
        this.authService.logout();
        console.log('You are logged out') ;
        this.router.navigate(['/login']);
        return false;
    }
}