import { UserService } from './../service/user.service';
import { NewPageService } from './../service/new-page.service';
import { Component, OnInit } from '@angular/core';
import { Page } from './../models/page';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageId: number;
  currentPage: Page;
  constructor(private pageService: NewPageService, private userService: UserService, private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.getTheme();
    //Get the current page and user.
    console.log(this.userService.getCurrentUser());
    console.log(this.pageService.getCurrentPage());
    console.log(this.userService.getPassword());
    this.pageId = +this.route.snapshot.paramMap.get('id');
    this.adminService.getPage(this.pageId).subscribe((r)=>{r = this.currentPage = r});
  }
   page = this.pageService.getCurrentPage();
   cUser = this.userService.getCurrentUser();

  //Check for theme
  getTheme() {
    console.log(this.pageService.getTheme());
    console.log(this.cUser);
  }

  //Allows user to update the page.
  updatePage() {
    this.pageService.updatePage(this.cUser.uId, this.page.title, this.page.summary, this.page.body).subscribe(
      data => {
        console.log(data);
      }
    )

  }


}
