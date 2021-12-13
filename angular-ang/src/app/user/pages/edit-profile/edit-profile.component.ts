import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userReg : FormGroup;
  isSubmit = false;
  id;
  allUsers =[];
  msg;
  country = [];
  state = [];
  city = [];

  constructor(private _fb : FormBuilder, private _userServ : UserService, private _actRoute : ActivatedRoute) { 
    this._getUserUpdating();
  }

  ngOnInit() {
    this._userServ.get(this.id).subscribe((result)=>{
      this.userReg.patchValue(result);
    });

    this.country = this._userServ.country();
  }

  public submit() : void {
      this.isSubmit = true;
      if(this.userReg.invalid)
      {
        return;
      }
      if(this.userReg.value._id)
      {
        this._userServ.update(this.userReg.value, this.userReg.value._id).subscribe((result)=>{
          for(let i = 0; i < this.allUsers.length; i++)
          {
            if(this.allUsers[i]._id == this.userReg.value._id)
            {
              this.allUsers[i]._id = this.userReg.value;
            }
          }
          this.msg = true;
          this.userReg.reset();
            this.isSubmit = false;
        });
      }
    }

    private _getUserUpdating() : void {
      this.userReg = this._fb.group({
        name : ["", Validators.required],
        username : ["",[Validators.required, Validators.email]],
        contact : ["", Validators.required],
        country : ["", Validators.required],
        state : ["", Validators.required],
        city : ["", Validators.required],
        address : ["", Validators.required],
      });
      this.id = this._actRoute.snapshot.paramMap.get("id");
    }

    public onChangeCountrySelect(event : Event) : void {
      const value = (<HTMLInputElement>event.target).value;
      this.state = this._userServ.state().filter(count => count.countryId === value);
    }

    public onChangeStateSelect(event : Event) : void {
      const value = (<HTMLInputElement>event.target).value;
      this.city = this._userServ.city().filter(sta => sta.stateId === value);
    }
}
