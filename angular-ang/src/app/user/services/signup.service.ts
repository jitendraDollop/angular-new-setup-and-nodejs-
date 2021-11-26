import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel, AuthResponseModel } from '../shared/models/authModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http : HttpClient) { }

  save(ragistrationRequest) : Observable<AuthResponseModel>{
    return this._http.post<AuthResponseModel>(`${process.env.API_URL}/api/signup`, ragistrationRequest)
  }
}
