import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
//import { CognitoService } from '../service/cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png";
  email : string;
  password: string;

  constructor() { }

  ngOnInit() {
   // window.location.href= "https://revaturetech.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4ptb0da4skq58fmigvjp65o1k&redirect_uri=http://localhost:4200/profile";
 }
//Attempt to sign in a user.
login() {
console.log(this.email);
console.log(this.password);
}




}
