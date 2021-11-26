import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthModel, AuthResponseModel } from '../shared/models/authModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private _http : HttpClient, private _router : Router) { 
    console.log(process.env.API_URL);
  }
  

  public login(LoginRequest : AuthModel) : Observable<AuthResponseModel>{
    return this._http.post<AuthResponseModel>(`${process.env.API_URL}/api/auth`, LoginRequest)
  }

  public logout() : void{
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

  public isLoggedIn() : boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    else
    {
      return false;
    }
  }
}
