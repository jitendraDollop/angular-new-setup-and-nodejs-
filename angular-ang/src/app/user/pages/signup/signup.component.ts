import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { contactErr, conNumberError, passwordError, passwordCharector } from '../../../helper/helper.validation';

import { SignupService } from '../../services/signup.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  userReg : FormGroup;
  isSubmit : boolean = false;
  country =[];
  state =[];
  city =[];

  constructor(private _fb : FormBuilder, private _signServ : SignupService, private _router : Router, private _userServ : UserService) {
    this.userReg = this._fb.group({
      name : ["", Validators.required],
      username : ["", [ Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      contact : ["", Validators.required],
      address : ["", Validators.required],
      country : ["", Validators.required],
      state : ["", Validators.required],
      city : ["", Validators.required]
    },
    {
      validators : [conNumberError(), contactErr(), passwordError(), passwordCharector()]
    }
    )
  }
  
  ngOnInit() {
    this.country = this._userServ.country();    
  }

  public submit() : void{
    this.isSubmit = true;
    if(this.userReg.invalid){
      return;
    }
    this._signServ.save(this.userReg.value).subscribe((result)=>{
      this._router.navigate(["/login"]);
    }, error=>{
      console.log(error);
    });
  }
  
  public reset() : void{
    this.isSubmit = false;
    this.userReg.reset();
  }
  
  public onChangeCountrySelect(event : Event) : void{
    const value = (<HTMLInputElement>event.target).value;
    this.state = this._userServ.state().filter(ev=>ev.countryId === value);
  }

  public onChangeStateSelect(event : Event) : void{
    const value = (<HTMLInputElement>event.target).value
    this.city = this._userServ.city().filter(e=>e.stateId === value);
  }
  
}
