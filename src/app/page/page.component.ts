import { NewPage } from './../models/new-page';
import { UserService } from './../service/user.service';
import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from './../models/page';
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
  currentPage: Page;
  constructor(private pageService: NewPageService, private userService: UserService, private adminService: AdminService,
  private router: Router
  ) { }

  ngOnInit() {
    //Get the current page and user.
    console.log("Current User")
    console.log(this.userService.getCurrentUser());
    console.log(this.pageService.getCurrentPage());
    console.log(this.userService.getPassword());
  }
   page = this.pageService.getCurrentPage();
   cUser = this.userService.getCurrentUser();


  //Allows user to update the page.
  updatePage() {
    console.log('Trying update.')
    console.log(this.page);
    console.log(this.page.pageId)
    this.pageService.updatePage( this.currentPage.pageId, this.newTitle, this.newSummary, this.newBody).subscribe(
      data => {
        console.log(data);

        console.log("Setting new page")
        if (data) {
          this.pageService.setPage(this.currentPage);
          console.log(this.currentPage)
         
          this.router.navigate(['page']);
          
          alert("Your page was successfully updated.")
          console.log(this.currentPage);
         
          
        }
        else {
          alert("Could not complete that action at this time.")
        }
        
      }
    )

  }


}
