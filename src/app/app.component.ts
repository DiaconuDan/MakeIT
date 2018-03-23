import { Component } from '@angular/core';
import menuItems from './common/menuItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menuItems = menuItems();
  title = 'app works!';
}
