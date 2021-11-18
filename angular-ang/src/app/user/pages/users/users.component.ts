import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers =[];

  constructor(private _userServ : UserService) {
    this._userServ.getAll().subscribe((result)=>{
      // console.log(result);
      this.allUsers = result[0];
    })
   }

  ngOnInit() {
  }

}
