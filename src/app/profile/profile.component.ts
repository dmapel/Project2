import { NewPage } from './../models/new-page';
import { PageService } from './../service/page.service';
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
  viewPage: any;
  pp : NewPage;


  constructor(private userService: UserService, private pageService: NewPageService, private router: Router, private adminService: AdminService, private activatedRoute: ActivatedRoute, private pService : PageService) { }

  ngOnInit() {
    this.cUser = this.userService.getCurrentUser();
    console.log(this.cUser);
    console.log(this.userService.getPassword());
    //If there is no current user, it will take it back to the login page.
   if (!this.cUser) {
     this.router.navigate(['']);
   }
   this.adminService.getSinglePages(this.cUser.uId).subscribe(
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

  //View pages by pageId
  viewPages(pageId){
   this.pService.getPageById(pageId).subscribe(
     data => {
       console.log(data);
       this.pp = {
         creatorId : this.cUser.uId,
         title: data[0].title,
         summary: data[0].summary,
         body: data[0].body
       }

        console.log("testing" + this.pp)

         //Set the new page as the current page.
         this.pageService.setPage(this.pp);
         console.log(this.pageService.getCurrentPage())

         //Sets the current user.
         this.userService.setCurrentUser(this.cUser);
        console.log(this.userService.getCurrentUser())
         //Navigate to page.
         this.router.navigate(['page']);
         
       
     }


   )
  }
}
