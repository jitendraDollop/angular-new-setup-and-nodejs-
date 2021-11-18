import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bodyText: string;

  constructor(private _modalServ : ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id : string){
    this._modalServ.open(id);
  }

  closeModal(id : string){
    this._modalServ.close(id);
  }

}
