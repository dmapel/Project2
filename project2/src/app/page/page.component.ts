import { NewPageService } from './../service/new-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private pageService : NewPageService) { }

  ngOnInit() {
    this.getTheme();
  }


  getTheme() {
   console.log(this.pageService.getTheme());
  }
}
