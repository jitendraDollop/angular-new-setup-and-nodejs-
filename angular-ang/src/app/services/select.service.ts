import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  

  city(){
    return [
      {
        id : 1,
        name : "Jabalpur"
      },
      {
        id : 1,
        name : "Jhabua"
      },
      {
        id : 1,
        name : "Reva"
      },
      {
        id : 1,
        name : "Bhopal"
      },
      {
        id : 1,
        name : "Ratlam"
      },
      {
        id : 1,
        name : "Sagar"
      },
      {
        id : 1,
        name : "Dhar"
      },
      {
        id : 1,
        name : "Chhindwara"
      },
      {
        id : 2,
        name : "Raipur"
      },
      {
        id : 2,
        name : "Akaltara"
      },
      {
        id : 2,
        name : "Ambikapur"
      },
      {
        id : 2,
        name : "Bhilai"
      },
      {
        id : 2,
        name : "Bilaspur"
      },
      {
        id : 2,
        name : "Durg"
      },
      {
        id : 2,
        name : "Ratanpur"
      }

    ]
  }


  constructor() { }
}
