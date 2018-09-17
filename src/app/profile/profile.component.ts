import { Router, ActivatedRoute } from '@angular/router';
import { NewPageService } from './../service/new-page.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { Page } from '../models/page';
import { AdminService } from '../service/admin.service';

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
  newUsername : string;
  newPassword: string;
  userId;
  page: Page [];

  constructor(private userService: UserService, private pageService: NewPageService, private router: Router, private adminService: AdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cUser = this.userService.getCurrentUser();
    console.log(this.cUser);
    console.log(this.userService.getPassword());
    //If there is no current user, it will take it back to the login page.
   if (!this.cUser) {
     this.router.navigate(['']);
   }
   this.adminService.getAllPages().subscribe(
    (data: any) => {
      console.log(data);
      this.page = data;

      for(let i = 0; i < this.page.length; i++){
        console.log(this.page[i]);
        if(this.page[i].creatorId == this.cUser.uId && this.page[i].pageStatusId == 1) {
          this.page.push(this.page[i]);
        }
      }
  })
}


  open() {
    this.editUser = true;
  }
//Allows user to cancel process.
cancel() {
  this.editUser = false;
}

  updateUser(username: string, password: string) {
 console.log(this.newPassword);
    this.editUser = false;
     console.log(this.newUsername);
     console.log(this.newPassword);
   
    this.userService.updateInfo(this.cUser.uId, this.cUser.fName, this.cUser.lName,this.newUsername, this.newPassword, this.cUser.posId).subscribe(
      data => {
        let info = data;
        console.log(info);
      }
    )
  }
}
