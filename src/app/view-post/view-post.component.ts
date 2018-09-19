import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { Page } from '../models/page';
import { NewPageService } from '../service/new-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  pages: Page[];
  title: string;
  title2 : string;


  constructor(private pageService: PageService, private nPageService : NewPageService, private router: Router) { }

  ngOnInit() {

    //Call the page service to get the pages.
    this.pages = this.pageService.getFilteredPages();
    console.log(this.pages);


     console.log("Testing");
     //Getting the pages titles.
     this.title2 = this.pages[0][0].title;
    this.title= this.pages[1][0].title;
  }

  first () {
    this.nPageService.setPage(this.pages[1][0])
    console.log(this.pages[1][0]);
    this.router.navigate(['page']);
  }

  second () {
    this.nPageService.setPage(this.pages[0][0])
    console.log(this.pages[0][0]);
    this.router.navigate(['page']);
  }

}
