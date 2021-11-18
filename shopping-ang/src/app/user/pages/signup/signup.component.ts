import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactLength, contactNumberError, passwordRepasswordErrors } from '../../../helper/helper.validation';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userRagistration : FormGroup;
  isSubmit = false;

  constructor(private _fb : FormBuilder, private _signServ : SignupService, private _router : Router) {
  }
  
  
  ngOnInit() {
    this.userRagistration = this._fb.group({
      name : ["", Validators.required],
      username : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      state : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required],
      remember : [false, Validators.requiredTrue]
    },
    {
      validators : [contactNumberError(), contactLength(), passwordRepasswordErrors()]
    }
    );
    
  }
  // get f() { return this.userRagistration.controls; }

  submit(){
    this.isSubmit = true;
    if(this.userRagistration.invalid){
      return;
    }
    this._signServ.save(this.userRagistration.value).subscribe((result)=>{
      this._router.navigate(['/login']);
      // console.log(result);
    })
    
  }

  reSet(){
    this.isSubmit = true;
    // this.userRagistration.);
    this.userRagistration.reset();
    // this.isSubmit = false;
  }

}
