import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../service/user.service';
import { Page } from '../models/page';
import { AdminService } from '../service/admin.service';
import { MatPaginator } from '@angular/material';
import { NewPage } from '../models/new-page';
import { User } from '../models/user';
import { PageService } from '../service/page.service';


@Component({
  selector: 'app-view-pages',
  templateUrl: './view-pages.component.html',
  styleUrls: ['./view-pages.component.css']
})
export class ViewPagesComponent implements OnInit {
  page: NewPage [];
  user: User;
  cUser: User;
  userId;
  page2: Page [];
  viewPage: any;
  pp : NewPage;

  constructor(private pService : PageService, private userService: UserService, private adminService : AdminService, private router : Router, private pageService : NewPageService) { }

  ngOnInit() {
 
  this.adminService.getAllPages().subscribe(
    (data: any) => {
      console.log(data);
      this.page = data;
      if (this.page) {
        //Set the updated page to the current page.
        // this.pageService.setPage(this.page);
        //Render the updated page.
        this.router.navigate(['view-pages']);
      }
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

          //Navigate to page.
          this.router.navigate(['page']);
          
        
      }
 
 
    )
   }

}
