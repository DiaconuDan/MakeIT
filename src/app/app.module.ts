import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router' ;
import { LoginComponent} from './login/login.component' ;
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './common/navbar/navbar.component';

const appRoutes : Routes = [
    {path: 'login', component: LoginComponent} ,
    {path: 'signup', component: SignupComponent}, 
    {path: '**' , redirectTo: '/'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ( appRoutes, { enableTracing:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
