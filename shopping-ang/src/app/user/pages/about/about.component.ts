import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  email = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

  emailUpdate(){
    this.email.setValue('james@gmail.com');
  }

}
