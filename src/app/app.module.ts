import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router' ;
import { LoginComponent} from './components/login/login.component' ;
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ValidateService } from './services/validate.service' ;
// import { FlashMessagesModule } from 'angular2-flash-messages' ;

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
    RouterModule.forRoot ( appRoutes, { enableTracing:false}),
  
  ],
  providers: [ AuthenticationService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
