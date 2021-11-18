import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  empty;
  user = {
    username : "",
    password : ""
  }
  msg;

  constructor(private _logServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }

  submit(reset){
    this._logServ.login(this.user).subscribe((result)=>{
      if(result){
        localStorage.setItem("token", result);
        this._router.navigate(["/dashboard"]);
      }
    }, err=>{
      if(err.error.type==1){
        this.msg = "This Username and Password is Incorrect !";
      }
      if(err.error.type==2){
        this.msg = "This Password is Incorrect !";
      }
    })
  }


}
