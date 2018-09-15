import { CognitoService } from './../service/cognito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png"
  username: string;
  password: string;
  name : string;
  email: string;
  cPassword: string;
  constructor(private cognito: CognitoService) { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);

     this.cognito.registerUser(this.username, this.password, this.email).subscribe(
       data => {
         console.log(data)
       }
     )
    
  }

}
