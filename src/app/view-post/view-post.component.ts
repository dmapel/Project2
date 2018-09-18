import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { Page } from '../models/page';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
pages : Page[];


  constructor(private pageService : PageService) { }

  ngOnInit() {
//Call the page service to get the pages.
 this.pages = this.pageService.getFilteredPages();
   console.log(this.pages[0]);
   
  }

}
