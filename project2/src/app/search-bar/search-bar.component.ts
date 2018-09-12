import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png"

  constructor() { }

  ngOnInit() {
  }

}
