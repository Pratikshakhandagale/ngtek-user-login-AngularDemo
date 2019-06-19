import { Component} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userLoginDemo';
  userLogin = [
    'manual-login',
    'facebook',
    'google'
    ];
    navUrl = "home";
    constructor(private router :Router){}

    signInUserData(data : any){
      this.router.navigate(['/home'], { replaceUrl: true });
    }
}
