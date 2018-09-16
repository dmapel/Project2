import { UserService } from './../service/user.service';
import { NewPageService } from './../service/new-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor(private pageService: NewPageService, private userService: UserService) { }

  ngOnInit() {
    this.getTheme();
    //Get the current page and user.
    console.log(this.userService.getCurrentUser());
    console.log(this.pageService.getCurrentPage());
  }
   page = this.pageService.getCurrentPage();
   cUser = this.userService.getCurrentUser();
  //Check for theme
  getTheme() {
    console.log(this.pageService.getTheme());
  }


  //Allows user to update the page.
  updatePage() {
    this.userService.updateInfo(this.cUser.uId, this.cUser.password, this.page.title, this.page.summary, this.page.body);

  }


}
