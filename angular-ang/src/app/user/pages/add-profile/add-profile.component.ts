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
  isSubmit : boolean =  false;
  userRagistrationAddingMessage;
  country = [];
  state = [];
  city = [];

  constructor(private _fb : FormBuilder, private _userServ : UserService) { 
    this._initializeForm();
  }

  ngOnInit() : void {
    this.country = this._userServ.country();
  }

  public submit() : void{
    this.isSubmit = true;
    if(this.userReg.invalid){
      return;
    }
    this._userServ.add(this.userReg.value).subscribe((result)=>{
      console.log(result);
      this.userRagistrationAddingMessage = true;
      this.reset();
      this.isSubmit = false;    
    });
  }

  public reset(){
    this.isSubmit = false;
    this.userReg.reset();
  }

  private _initializeForm() : void{
    this.userReg = this._fb.group({
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
    );
  }

  public onChangeCountrySelect(event : Event): void{
    const value = (<HTMLInputElement>event.target).value;
    this.state = this._userServ.state().filter(count => count.countryId === value);
  }

  public onChangeStateSelect(event : Event): void {
    const value = (<HTMLInputElement>event.target).value;
    this.city = this._userServ.city().filter(state => state.stateId === value);
  }

}
