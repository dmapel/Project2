import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { AdminService } from '../service/admin.service';
import { MatPaginator } from '@angular/material';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  user: User[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private adminService: AdminService, private userService: UserService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
      }
    )
  }

  promote(positionId) {
    const data = {
      uId: positionId,
      posId: 1,
    }
    // Changed method to promote user.
    this.userService.promoteUser(positionId).subscribe(stat => {
      alert('Promoted to admin')
    });

  }

}
