import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  result: any;

  constructor(private _http : HttpClient) { }

  selectAll(){
    return this._http.get<any>("http://localhost:2000/api/select", {
      headers : { Authorization : localStorage.getItem("token")}
    })
  }
}
