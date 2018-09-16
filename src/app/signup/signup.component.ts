import { Router } from '@angular/router';
import { CognitoService } from './../service/cognito.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png"
  username: string;
  password: string;
  fName : string;
  lName : string;
  email: string;
  cPassword: string;
  user: User;
  constructor(private cognito: CognitoService, private userService : UserService, private router : Router) { }

  ngOnInit() { }

  registerUser() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);

    //Add user to cognito pool.
     this.cognito.registerUser(this.username, this.password, this.email,).subscribe(
       data => {
         console.log(data);
        //Pass to database.
         if (data) {
           alert("You have successfully registered. Please login.")
          this.router.navigate(['']);
         }
       }
     )
    
  }

}
