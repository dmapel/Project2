import { Router } from '@angular/router';
import { NewPageService } from './../service/new-page.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  img = 'assets/pics/profile-placeholder.png';
  editUser = false;
  user: User;
  cUser: User;
  currentPassword: string;
  newPassword: string;

  constructor(private userService: UserService, private pageService: NewPageService, private router: Router) { }

  ngOnInit() {
    this.cUser = this.userService.getCurrentUser();
    console.log(this.cUser);
    //If there is no current user, it will take it back to the login page.
   if (!this.cUser) {
     this.router.navigate(['']);
   }
    //If there is no current user, it will take it back to the login page.
   if (!this.cUser) {
     this.router.navigate(['']);
   }
  }




  open() {
    this.editUser = true;
  }
//Allows user to cancel process.
cancel() {
  this.editUser = false;
}

  updateUser() {
 console.log(this.newPassword);
    this.editUser = false;
     let password = this.userService.getPassword();
    this.userService.updateInfo(this.cUser.uId, this.cUser.fName, this.cUser.lName, this.cUser.uId, password);
  }
}
