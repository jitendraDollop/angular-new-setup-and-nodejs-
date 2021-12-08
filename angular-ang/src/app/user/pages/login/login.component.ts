import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { AuthModel, AuthResponseModel } from '../../shared/models/authModel';

import constants from '../../constants';
import { ErrorMessageEnum } from '../../enums/errorMessageTypeEnum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : AuthModel =  {
    username : "",
    password : ""
  }
  infoMsg : string;

  constructor(private _loginService : LoginService, private _router : Router) { }

  ngOnInit() {
  }

  public login() : void{
    this._loginService.login(this.user).subscribe((result : AuthResponseModel)=>{
      if(result && result.token){
        localStorage.setItem("token", result.token);
        this._router.navigate(["/profile"]);
      }
      else
      {
        this.infoMsg = constants.loginMessages.TOKEN_ERROR;
      }
    }, error=>{
      if(error.error.type === ErrorMessageEnum.USERNAMEPASSWORDINCORRECT){
        this.infoMsg = constants.loginMessages.USERNAME_PASSWORD_INCORRECT;
      }
      if(error.error.type === ErrorMessageEnum.PASSWORDINCORRECT){
        this.infoMsg = constants.loginMessages.PASSWORD_INCORRECT;
      }
    })
  }
}
