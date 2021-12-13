import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserProfileResponseModel } from '../../shared/models/userModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allUsers : Array<UserProfileResponseModel>;
  tempUsers : UserProfileResponseModel;

  constructor(private _userServ : UserService) {  
    this._getUserProfile();
  }

  ngOnInit() : void{
  }

  public askDelete(user : UserProfileResponseModel) : void{
    this.tempUsers = user;
  }

  public delete() : void{
    this._userServ.delete(this.tempUsers._id).subscribe((result)=>{
      let n = this.allUsers.indexOf(this.tempUsers);
      this.allUsers.splice(n, 1);
    })
  }

  private _getUserProfile() : void {
    this._userServ.getAll().subscribe((result :  Array<UserProfileResponseModel>)=>{
      this.allUsers = result;
    }, error=>{
      console.log(error);
    });
  }

}
