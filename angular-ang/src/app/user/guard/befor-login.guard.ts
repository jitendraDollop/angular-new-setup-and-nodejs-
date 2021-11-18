import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeforLoginGuard implements CanActivate {
  constructor(private _router : Router ){}
  canActivate(){
    if(localStorage.getItem("token")){
      return true;
    }
    else
    {
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
