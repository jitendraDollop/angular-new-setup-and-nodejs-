import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// import * as fs from 'file-system';
// import { join } from 'path';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  fileForm : FormGroup;
  isSubmit = false;

  path;
  arr=[];

  // target : String;
  imageSrc: string;

  constructor(private _http : HttpClient, private _fb : FormBuilder) { 
    this.fileForm = this._fb.group({
      file : ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  onFileChange(evant){
    var reader = new FileReader;
    if(evant.target.files && evant.target.files.length){
      var [file] = evant.target.files;
      reader.readAsDataURL(file);
      reader.onload=()=>{
        this.imageSrc = reader.result as string;
        this.fileForm.patchValue({
          fileSource : reader.result
        })
      }
    }
  }

  submit(image){
    this.isSubmit = true;
    if(this.fileForm.invalid){
      return;
    }
    var file = image.files[0];
    var form = new FormData();
    form.append('image', file);
    this._http.post<any>("http://localhost:2000/api/upload", this.fileForm.value).subscribe((result)=>{
      this.arr.push(result.path);
  })
    
  }

}

