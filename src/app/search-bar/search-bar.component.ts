import { Page } from './../models/page';
import { PageService } from './../service/page.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  img = 'https://files.slack.com/files-pri/TBCU1B4N5-FCVM8QYG7/revature__.png';
 input : string;
 tags : Tag[];
page : Page[];
startAt = new Subject();
endAt = new Subject();
t:number;

  constructor(private userService: UserService, private pagService : PageService, 
  private router: Router, private adminService: AdminService) {
   
   }

  ngOnInit() {
    let current = this.userService.getCurrentUser();
    console.log(current);

    this.pagService.getAllTags().subscribe(
      data => {
        console.log(data);
        //this.tags = data;
       let info = (JSON.stringify(data.valueOf()));
        console.log(info);
      }
    )


  }

  search($event) {
    console.log('hits')
    this.pagService.filter(this.t).subscribe(
      data => {console.log(data)}
    );
  }

  getIntroPages() {
  console.log('Intro');
  this.pagService.filter(8).subscribe(
    data => {
      console.log(data);
      this.page = data;
      

    }
  )
 
  
}
getSqlPages() {
  console.log('SQL');
  this.pagService.filter(3);
  this.router.navigate([''])
  
}
getSqlCPages() {
  console.log('SQL C');
  this.pagService.filter(16);
  this.router.navigate([''])
}
getAwsPages() {
  console.log('AWS');
  this.pagService.filter(11);
  this.router.navigate([''])
}



  userSelection(tagId: number) {
    this.pagService.filter(tagId).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
