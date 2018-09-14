import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  img = "assets/pics/revature-logo-600x219.png";

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
