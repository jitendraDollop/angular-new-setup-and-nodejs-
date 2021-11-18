import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  items = [];
  pageOfItem : Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = Array(150).fill(0).map((x, i)=>({ id: (i + 1 ),
    name : `Dollop ${i + 1}`}))
  }


  onChangePage(pageOfItem : Array<any>){
    this.pageOfItem = pageOfItem;

  }

}
