import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  country = [];
  state = [];
  city = [];
  selectedCountry = [];
  selectedCity = [];

  constructor(private _http : HttpClient) {

    this._http.get<any>("http://localhost:2000/api/dropdown", { headers : { Authorization : localStorage.getItem("token")}}).subscribe((result)=>{
      this.country = result[0];
      this.state = result[1];
      this.city = result[2];
      // console.log(result);
     
    })
   }

  ngOnInit() {
    // this.country = this.country;
    // this.country = null;
  }

  onCountry(event){
    for(let i = 0; i < this.state.length; i++)
    {
      if(this.state[i].countryId == event)
      {
        this.selectedCountry.push(this.state[i]);
        this.state[i] = null;
      }
    }
  }

  onState(event)
  {
    for(let n = 0; n < this.city.length; n++){
      if(this.city[n].stateId == event)
      {
        this.selectedCity.push(this.city[n]);
      
        
        this.city[n] = null;
      }
    }
  }

}
