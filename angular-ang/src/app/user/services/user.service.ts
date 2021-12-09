import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserProfileResponseModel } from '../shared/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl : string = `${environment.API_URL}/api/user/`;

  constructor(private _http : HttpClient) { }

  public getAll() : Observable<Array<UserProfileResponseModel>>{
    return this._http.get<Array<UserProfileResponseModel>>(this.apiUrl, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  public get(id){
    return this._http.get<any>(this.apiUrl+id, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  public add(userAddingRequest){
    return this._http.post<any>(this.apiUrl, userAddingRequest, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  update(obj, id : any){
    return this._http.put<any>(this.apiUrl+id, obj, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  delete(id : string){
    return this._http.delete<any>(this.apiUrl+id, {
      headers : { Authorization : localStorage.getItem("token")}
    });
  }

  country(){
    return [
      {
        id : "1",
        name : "india"
      },
      {
        id : "2",
        name : "united state"
      },
      {
        
      }
    ]
  }
  

  state(){
    return [
      {
        id : "1",
        name : "madhya pradesh",
        countryId : "1"
      },
      {
        id : "2",
        name : "chhattisgarh",
        countryId : "1"
      },
      {
        id : "3",
        name : "US 01",
        countryId : "2"
      },
      {
        id : "4",
        name : "US 02",
        countryId : "2"
      }
    ]
  }

  city(){
    return [
      {
        id : "1",
        name : "Jabalpur",
        stateId : "1"
      },
      {
        id : "2",
        name : "Jhabua",
        stateId : "1"
      },
      {
        id : "3",
        name : "Bhopal",
        stateId : "1"
      },
      {
        id : "4",
        name : "Reva",
        stateId : "1"
      },
      {
        id : "5",
        name : "Ratlam",
        stateId : "1"
      },
      {
        id : "6",
        name : "Raipur",
        stateId : "2"
      },
      {
        id : "7",
        name : "Akaltara",
        stateId : "2"
      },
      {
        id : "8",
        name : "Ambikapur",
        stateId : "2"
      },
      {
        id : "9",
        name : "Bilaspur",
        stateId : "2"
      },
    ]
  }

}



