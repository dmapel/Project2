import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Page } from '../models/page';


@Component({
  selector: 'app-view-pages',
  templateUrl: './view-pages.component.html',
  styleUrls: ['./view-pages.component.css']
})
export class ViewPagesComponent implements OnInit {
  page: Page;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllPages();
  }

  getAllPages() {
    this.userService.getAllPages().subscribe(
      (data: any) => {
        console.log(data);
        this.page = data;
      }
    )
  }

}
