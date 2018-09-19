import { NewPage } from './../models/new-page';
import { PageService } from './../service/page.service';
import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../service/user.service';
import { Page } from '../models/page';
import { AdminService } from '../service/admin.service';
import { MatPaginator } from '@angular/material';



@Component({
  selector: 'app-view-pages',
  templateUrl: './view-pages.component.html',
  styleUrls: ['./view-pages.component.css']
})
export class ViewPagesComponent implements OnInit {
  page: NewPage [];
  sendoffPage : NewPage;

  constructor(private userService: UserService, private adminService : AdminService, private router : Router, private pageService : NewPageService, private ppService : PageService) { }

  ngOnInit() {
 
  this.adminService.getAllPages().subscribe(
    (data: any) => {
      console.log(data);
      this.page = data;
      if (this.page) {
        //Set the updated page to the current page.
        // this.pageService.setPage(this.page);
        //Render the updated page.
        // this.router.navigate(['view-pages']);
        console.log(this.page);
      }
    }
  )
  
  }

  get(id) {
    console.log(id);
    this.ppService.getPageById(id).subscribe(
      data => {
        console.log(data);
        if (data) {
          this.sendoffPage = {
            creatorId: data[0].creatorId,
            title: data[0].title,
            summary: data[0].summary,
            body:data[0].body
          }
          console.log(this.sendoffPage);
          this.pageService.setPage(this.sendoffPage);
          this.router.navigate(['page']);
        }
      }
    )

  }
  
}
