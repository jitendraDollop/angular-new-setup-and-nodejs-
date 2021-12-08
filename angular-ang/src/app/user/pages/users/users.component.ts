import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserProfileResponseModel } from '../../shared/models/userModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // allUsers :  Array<UserProfileResponseModel> = [];

  constructor(private _userServ : UserService) {
  }

  ngOnInit() {
  }

}
