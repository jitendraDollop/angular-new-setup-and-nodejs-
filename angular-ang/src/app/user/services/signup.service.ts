import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel, AuthResponseModel } from '../shared/models/authModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http : HttpClient) { }

  save(ragistrationRequest) : Observable<AuthResponseModel>{
    return this._http.post<AuthResponseModel>(`${environment.API_URL}/api/signup`, ragistrationRequest)
  }
}
