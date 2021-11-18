import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:2000/api/user/";

  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this.apiUrl, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  get(id){
    return this._http.get<any>(this.apiUrl+id, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  add(obj){
    return this._http.post<any>(this.apiUrl, obj, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  update(obj, id : any){
    return this._http.put<any>(this.apiUrl+id, obj, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  delete(id){
    return this._http.delete<any>(this.apiUrl+id, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  country(){
    return [
      {
        id : 1,
        name : "india"
      },
      {
        id : 2,
        name : "united state"
      },
      {
        
      }
    ]
  }
  

  state(){
    return [
      {
        id : 1,
        name : "madhya pradesh"
      },
      {
        id : 2,
        name : "chhattisgarh"
      },
      {
        id : 2,
        name : "US 01"
      },
      {
        id : 2,
        name : "US 02"
      }
    ]
  }

  city(){
    return [
      {
        id : 1,
        name : "Jabalpur"
      },
      {
        id : 1,
        name : "Jhabua"
      },
      {
        id : 1,
        name : "Reva"
      },
      {
        id : 1,
        name : "Bhopal"
      },
      {
        id : 1,
        name : "Ratlam"
      },
      {
        id : 1,
        name : "Sagar"
      },
      {
        id : 1,
        name : "Dhar"
      },
      {
        id : 1,
        name : "Chhindwara"
      },
      {
        id : 2,
        name : "Raipur"
      },
      {
        id : 2,
        name : "Akaltara"
      },
      {
        id : 2,
        name : "Ambikapur"
      },
      {
        id : 2,
        name : "Bhilai"
      },
      {
        id : 2,
        name : "Bilaspur"
      },
      {
        id : 2,
        name : "Durg"
      },
      {
        id : 2,
        name : "Ratanpur"
      }

    ]
  }

}
  
