import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserProfileResponseModel } from '../../shared/models/userModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allUsers : Array<UserProfileResponseModel> = [];
  tempUsers;

  constructor(private _userServ : UserService) {  
    this._userServ.getAll().subscribe((result :  Array<UserProfileResponseModel>)=>{
      this.allUsers = result;

    }) 
  }

  ngOnInit() : void{
  }

  public askDelete(obj) : void{
    this.tempUsers = obj;
  }

  public delete() : void{
    this._userServ.delete(this.tempUsers._id).subscribe((result)=>{
      let n = this.allUsers.indexOf(this.tempUsers);
      this.allUsers.splice(n, 1);
    })
  }

}
