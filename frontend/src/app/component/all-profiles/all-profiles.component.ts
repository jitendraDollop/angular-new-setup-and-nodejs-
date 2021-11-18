import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles : Profile[] = [];
  private _profileSubcription : Subscription;


  constructor(private _profileServ : ProfileService) { }

  ngOnInit() {
    this._profileServ.getProfiles();
    this._profileSubcription = this._profileServ
    .getProfilesStream()
    .subscribe((profiles : Profile[])=>{
      console.log(profiles);
      this.profiles = profiles;
    });
  }

  ngOnDestroy(){
    this._profileSubcription.unsubscribe();
  }

}
