import { Tag } from './../models/tag';
import { Page } from './../models/page';
import { PageService } from './../service/page.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  img = 'https://files.slack.com/files-pri/TBCU1B4N5-FCVM8QYG7/revature__.png';
  input: string;

  tags: Tag[];
  page: Page[];
  title: string;

  constructor(private userService: UserService, private pagService: PageService,
    private router: Router) {

  }

  ngOnInit() {
    //Get the current logged in user..
    let current = this.userService.getCurrentUser();
    console.log(current);

    //Call page service to get all tags.
    this.pagService.getAllTags().subscribe(
      data => {
        console.log(data);
        this.tags = data;
        console.log(this.tags[2].tagId)
      }
    )
  }

  //Call page service to get paged for selected tag and then send to ViewPosts Component.
getPages(id: number) {
  console.log("Testing get pages....");
  this.pagService.filter(id).subscribe(
    data => {
      console.log(data);
      if (data) {
        this.pagService.setFilteredPages(data);
        if (data) {
        this.router.navigate(['view--post']);
        }
      }
    }
  )
}




  userSelection(tagId: number) {
    this.pagService.filter(tagId).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
