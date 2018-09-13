import { NewPage } from './../models/new-page';
import { NewPageService } from './../service/new-page.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
 options =  [
{name: 'teal-theme', label: 'Teal'},
{name:'orange-theme', label: 'Orange'},
{name: 'default-theme', label: 'White'}
]

//lElements of each page.
selectedValue: string;
title : string;
body: string;
summary : string;
page : NewPage;
  constructor(private http : HttpClient, private router : Router, 
  private pageService : NewPageService) { }

  ngOnInit() {
  }

  storePage() {
    //Create a new page from user input.
   this.page = {
     title : this.title,
     summary : this.summary,
     body : this.body,
    theme : this.selectedValue
   }

   console.log(this.page);
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
}


}
