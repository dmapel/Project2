import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  img = "assets/pics/profile-placeholder.png"
  editUser = false;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.canvas();
  }

  canvas () {
    var canvas : any = document.getElementById("myCanvas");
    var ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("{{}}", canvas.width/2, canvas.height/2); 
  }

  updateUser() {
    this.editUser = true;
  }

  save() {
    //post and change edit user to false
    this.userService.updateInfo(this.user).subscribe(
      result => {
        sessionStorage.setItem('user', JSON.stringify(this.user));
      }
    );
    this.editUser = false;
  }
}
