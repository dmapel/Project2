import {PageService} from './../service/page.service';
import { NewPage } from './../models/new-page';
import { UserService } from './../service/user.service';
import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from './../models/page';
import { AdminService } from '../service/admin.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';



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
  currentPage: NewPage;
  page: Page;
  comments: Comment[];
  cUser : User = this.userService.getCurrentUser();
  constructor(private pageService: NewPageService, private userService: UserService, private adminService: AdminService,
  private router: Router, private pService : PageService
  ) { }

  ngOnInit() {
   console.log("get current page");
   console.log(this.pageService.getCurrentPage());
   this.getPageByTitle(this.pageService.getCurrentPage().title);

    //Get the current page and user.
    console.log(this.userService.getCurrentUser());
    console.log(this.pageService.getCurrentPage());
    console.log(this.userService.getPassword());
    // this.pageId = +this.route.snapshot.paramMap.get('id');
    // this.adminService.getPage(this.pageId).subscribe((r)=>{r = this.currentPage = r});
  }
  //  page = this.pageService.getCurrentPage();
  //  cUser = this.userService.getCurrentUser();

  getPageByTitle(title) {
    this.pService.getPageByTitle(title).subscribe(p => {
      this.page= p;
      this.comments = this.page.pageComments;
    });
  }

  submitComment(comment: string) {
    const com = {
      uId: this.cUser.uId,
      pageId: this.page.pageId,
      content: comment
    }
    this.pService.addComment(com).subscribe(c => this.page.pageComments.push(c));
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
