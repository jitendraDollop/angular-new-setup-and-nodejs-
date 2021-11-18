import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  allUsers = [];

  tempUsers;
  constructor(private _userServ : UserService) { 
    this._userServ.getAll().subscribe((result)=>{
      // console.log(result);
      this.allUsers = result;
    }) 
  }

  ngOnInit() {
  }

  askDelete(obj){
    this.tempUsers = obj;
  }

  delete(){
    this._userServ.delete(this.tempUsers._id).subscribe((result)=>{
      let n = this.allUsers.indexOf(this.tempUsers);
      this.allUsers.splice(n, 1);
    })
  }

}
