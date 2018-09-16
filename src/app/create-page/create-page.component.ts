import { NewPage } from '../models/new-page';
import { Page } from '../models/page';
import { NewPageService } from './../service/new-page.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  options = [
    { name: 'teal-theme', label: 'Teal' },
    { name: 'orange-theme', label: 'Orange' },
    { name: 'default-theme', label: 'White' }
  ]

  //lElements of each page.
  selectedValue: string;
  title: string;
  body: string;
  summary: string;
  pageId: number;
  page: NewPage;
  selectedFile: File;
  constructor(private http: HttpClient, private router: Router,
    private pageService: NewPageService, private userService: UserService
  ) { }
  ngOnInit() {
  }
//Get the image upload.
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile)
  }

  storePage() {
    //Gets the current user so we can user their uId.
    let current = this.userService.getCurrentUser();
    console.log(current);
     //If there is no current user, it will take it back to the login page.
   if (!current) {
    this.router.navigate(['']);
  }
    //Create a new page from user input.
    this.page = {
      creatorId: current.uId,
      title: this.title,
      summary: this.summary,
      body: this.body
    }
    //Insert new page in database.
    this.pageService.createNewPage(this.page.creatorId, this.page.title, this.page.summary, this.page.body).subscribe(
      data => {
        console.log(data);
      }
    )

    //Set the new page as the current page.
    this.pageService.setPage(this.page);

    //Test to get the current page.
    console.log(this.pageService.getCurrentPage());
    
    //Calls the method to set the current page's theme.
    this.getSelectedValue()
  }

  //Gets the selected theme.
  getSelectedValue() {
    console.log(this.selectedValue);
    this.pageService.setTheme(this.selectedValue);
    console.log(this.pageService.getTheme());
    this.router.navigate(['page']);
  }


}
