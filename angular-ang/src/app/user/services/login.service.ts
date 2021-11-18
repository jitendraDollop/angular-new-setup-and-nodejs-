import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) { }

  login(obj : any){
    return this._http.post<any>("http://localhost:2000/api/auth", obj)
  }

  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else
    {
      return false;
    }
  }
}
