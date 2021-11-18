import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Profile } from "../models/Profile";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  addProfiles(_name: any, _image: any) {
    throw new Error('Method not implemented.');
  }
  private profiles : Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://localhost:3000/api/profiles";

  constructor(private _http : HttpClient) { }

  getProfiles(){
    this._http.get<{profiles : Profile[]}>(this.url).pipe(
      map((profileData)=>{
      return profileData.profiles;
    })).subscribe((profiles)=>{
      this.profiles = profiles;
      this.profiles$.next(this.profiles);
    });
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

 addProfile(name: string, image: File): void {
    const profileData = new FormData();
    profileData.append("name", name);
    profileData.append("image", image, name);
    this._http
      .post<{ profile: Profile }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: Profile = {
          _id: profileData.profile._id,
          name: name,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }


 
}
