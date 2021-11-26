import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { contactErr, conNumberError, passwordError, passwordCharector } from '../../../helper/helper.validation';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  userReg : FormGroup;
  isSubmit = false;
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
    })
  }
  
  public reset() : void{
    this.isSubmit = false;
    this.userReg.reset();
  }
  
  public onChangeCountrySelect(country) : void{
    this.country = this._userServ.country().filter(st=>st.id);
    this.city = this._userServ.city().filter(e=>e.id == country.target.value);
    this.state = this._userServ.state().filter(ev=>ev.id == country.target.value);
  }
  
}
