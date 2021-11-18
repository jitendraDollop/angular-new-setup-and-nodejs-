import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _fb : FormBuilder, private _userServ : UserService, private _actRoute : ActivatedRoute) { 
    this.userReg = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      username : ["",[Validators.required, Validators.email]],
      contact : ["", Validators.required],
      address : ["", Validators.required]
    });
    this.id = this._actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this._userServ.get(this.id).subscribe((result)=>{
      // console.log(result);
      this.userReg.patchValue(result);
    })
  }

  submit(){
      this.isSubmit = true;
      if(this.userReg.invalid)
      {
        return;
      }
      // console.log(this.userReg.value);
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
          this.userReg.setValue({
              _id : "",
              name : "",
              username : "",
              contact : "",
              address : ""
            });
            this.isSubmit = false;
        })
      }
    }
    

    
}
