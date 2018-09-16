import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  img = 'assets/pics/revature-logo-600x219.png';

  constructor(private userService: UserService) { }

  ngOnInit() {
    let current = this.userService.getCurrentUser();
    console.log(current);
  }

}
