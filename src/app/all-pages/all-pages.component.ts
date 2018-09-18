import { NewPageService } from './../service/new-page.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../service/user.service';
import { Page } from '../models/page';
import { AdminService } from '../service/admin.service';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.css']
})
export class AllPagesComponent implements OnInit {
  page: Page [];

  constructor(private userService: UserService, private adminService : AdminService, private router : Router, private pageService : NewPageService) { }

  ngOnInit() {
 
  this.adminService.getAllPages().subscribe(
    (data: any) => {
      console.log(data);
      this.page = data;
      if (this.page) {
        //Set the updated page to the current page.
        this.pageService.setPage(this.page);
        //Render the updated page.
        this.router.navigate(['all-pages']);
      }
    }
  )
  }

}
