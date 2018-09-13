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
selectedValue: string;
title : string;
body: string;
summary : string;

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit() {
  }

  //Gets the selected theme.
getSelectedValue() {
  console.log(this.selectedValue);
  console.log(this.title);
  console.log(this.summary);
  console.log(this.body);
  this.router.navigate(['page']);
  
}


}
