import { NewPage } from './../models/new-page';
import { UserService } from './../service/user.service';
import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from './../models/page';
import { NewComment } from './../models/new-comment';
import { AdminService } from '../service/admin.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  newTitle :string;
  newSummary: string;
  newBody: string;
  pageId: number;
  comment: NewComment;
  commentId: number;
  content: string;
  currentPage: NewPage;
  constructor(private pageService: NewPageService, private userService: UserService, private adminService: AdminService,
  private router: Router
  ) { }

  ngOnInit() {
   
    //Get the current page and user.
    console.log(this.userService.getCurrentUser());
    console.log(this.pageService.getCurrentPage());
    console.log(this.userService.getPassword());
    // this.pageId = +this.route.snapshot.paramMap.get('id');
    // this.adminService.getPage(this.pageId).subscribe((r)=>{r = this.currentPage = r});
  }
   page = this.pageService.getCurrentPage();
   cUser = this.userService.getCurrentUser();

   writeComment = false;
   newComment () {
     this.writeComment = true;
   }

   addComment() {
       //Gets the current user so we can user their uId.
     let currentPage = this.pageService.getCurrentPage;
     console.log(currentPage);
      //If there is no current user, it will take it back to the login page.
    if (!currentPage) {
     this.router.navigate(['']);
   }
     //Create a new page from user input.
     this.comment = {
       commentId: <any>{},
       content: this.content
     }
     //Insert new page in database.
   this.pageService.createComment(this.comment.commentId, this.comment.content).subscribe(
      data => {
        console.log(data);
      })
   }
  

  //Allows user to update the page.
  updatePage() {
    this.pageService.updatePage(this.cUser.uId, this.newTitle, this.newSummary, this.newBody).subscribe(
      data => {
        console.log(data);
        this.currentPage = data;

        if (data) {
          this.pageService.setPage(this.currentPage);
         
          this.router.navigate(['page']);
          
          // alert("Your page was successfully updated.")
          // console.log(this.currentPage);
         
          
        }
        else {
          alert("Could not complete that action at this time.")
        }
        
      }
    )

  }


}
