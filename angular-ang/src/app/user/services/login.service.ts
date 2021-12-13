import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthModel, AuthResponseModel } from '../shared/models/authModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) {   }
  
  public login(LoginRequest : AuthModel) : Observable<AuthResponseModel>{
    return this._http.post<AuthResponseModel>(`${environment.API_URL}/api/auth`, LoginRequest)
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
