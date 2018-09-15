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
  page: Page [];
final = this.adminService.getAllPages().subscribe(data => {
  return (data.title);
})
  displayColumns: string[] = ['pageId', 'title', 'tags', 'timeSubmission'];
  @ViewChild(MatPaginator) paginator: MatPaginator
  constructor(private userService: UserService, private adminService : AdminService) { }

  ngOnInit() {
    this.getAllPages();
  }

  getAllPages() {
    this.adminService.getAllPages().subscribe(
      (data: any) => {
        console.log(data);
        this.page = data;
      }
    )
  }

}
