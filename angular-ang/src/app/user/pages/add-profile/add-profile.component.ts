import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { conNumberError, contactErr, passwordError, passwordCharector } from '../../../helper/helper.validation';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  userReg : FormGroup;
  isSubmit = false;

  showMsg;

  constructor(private _fb : FormBuilder, private _userServ : UserService) { 
    this.userReg = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      username : ["",[Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      contact : ["", Validators.required],
      address : ["", Validators.required],
      country : ["", Validators.required],
      state : ["", Validators.required],
      city : ["", Validators.required]
    },
    {
      validators : [conNumberError(),contactErr(), passwordError(), passwordCharector()]
    }
    )
  }

  ngOnInit() {
  }

  submit(){
    this.isSubmit = true;
    if(this.userReg.invalid){
      return;
    }
    this._userServ.add(this.userReg.value).subscribe((result)=>{
      this.showMsg = true;
      this.userReg.setValue({
        _id : "",
        name : "",
        username : "",
        password : "",
        re_password : "",
        contact : "",
        address : ""
      });
      this.isSubmit = false;
      
      // console.log(result);
    })
    // console.log(this.userReg.value);
  }

  reset(){
    this.isSubmit = false;
    this.userReg.reset();
  }

  

}
