import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
 options =  [
{name: 'light-theme', label: 'Light'},
{name:'dark-theme', label: 'Dark'},
{name: 'default-theme', label: 'Default'}
]

  constructor() { }

  ngOnInit() {
  }

}
