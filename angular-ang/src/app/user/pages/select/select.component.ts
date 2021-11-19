import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../services/select.service';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  Country = [];
  State =[];
  city;
  id;
  

  constructor(private _selServ : SelectService) { 
    this._selServ.selectAll().subscribe((result)=>{
      this.State = result.state;
      // console.log(this.State);

     
        // this.State.filter(E=>E.id, this.State);
        this.id = this.State;
        this.State = this.State;
      

    })
      
  }

  ngOnInit() {

  }
  
  
  City: any = [
    { id: 1, name: "Ahmedabad", state: 1 },
    { id: 2, name: "Rajkot", state: 1 },
    { id: 3, name: "Gandhinagar", state: 1 },
    { id: 4, name: "Mumbai", state: 2 },
    { id: 5, name: "Pune", state: 2 },
    { id: 6, name: "Udaipur", state: 3 },
    { id: 7, name: "Jaipur", state: 3 }
  ]
  
  selectedState : any = "";
  selectedCity : any = "";
  
  
  dropdownCity: any = [];
  
  populateCity(value) {
    this.dropdownCity = this.City.filter(i => i.State == value);
  }


}
