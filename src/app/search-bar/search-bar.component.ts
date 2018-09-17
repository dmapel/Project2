import { PageService } from './../service/page.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/tag';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  img = 'assets/pics/revature-logo-600x219.png';

tags : Tag[];

  constructor(private userService: UserService, private pagService : PageService) { }

  ngOnInit() {
    let current = this.userService.getCurrentUser();
    console.log(current);

    this.pagService.getAllTags().subscribe(
      data => {
        console.log(data);
        this.tags = data;
      }
    )
  }

searchATag(tag: string) {
  
}

}
