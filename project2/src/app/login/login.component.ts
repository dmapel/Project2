import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../service/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png";
  email: string;
  password: string;
  errorMessage: string;

  constructor(private cognitoService: CognitoService,
    private router: Router) { }

  ngOnInit() {
    // window.location.href= "https://revaturetech.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4ptb0da4skq58fmigvjp65o1k&redirect_uri=http://localhost:4200/profile";
  }
  //Attempt to sign in a user.
  login() {
    console.log(this.email);
    console.log(this.password);

    // First get the user's id token from cognito
    this.cognitoService.signIn(this.email, this.password).subscribe(
      result => {
        if (result) {
          this.router.navigate(['search-bar']);
          // If there was an error
          if (result['message']) {
            this.errorMessage = 'Invalid credentials';
            alert("Username or password not valid. Please try again.");
            return;
          }
        }
      })

  }


}