import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router' ;
import { LoginComponent} from './login/login.component' ;
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';

const appRoutes : Routes = [
    {path: 'login', component: LoginComponent} ,
    {path: 'register', component: RegisterComponent}, 
    {path: 'profile', component: ProfileComponent},
    {path: '**' , redirectTo: '/'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot ( appRoutes, { enableTracing:false})
  ],
  providers: [ AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
