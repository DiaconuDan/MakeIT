import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent {
    
    constructor(private router : Router) {

    }
}