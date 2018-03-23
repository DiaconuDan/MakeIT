import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import menuItems from '../menuItems';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent {
    @Input() private menuItems;
    constructor(private router : Router) {

    }
}