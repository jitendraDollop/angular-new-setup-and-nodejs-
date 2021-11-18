import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  form : FormGroup;

  private : Profile;
  imageData : string;

  constructor(private _profileServ : ProfileService) { 
    }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl(null),
      image : new FormControl(null)
    })
  }

  onFileSelect(event : any){
    var file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image : file });
    var alloedMimeType = ["image/png", "image/jpeg", "image/jpg"];
    if(file && alloedMimeType.includes(file.type)){
      var reader = new FileReader;
      reader.onload = ()=>{
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this._profileServ.addProfile(this.form.value.name, this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }
  


}
