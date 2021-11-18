import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AdminComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element : any;

  constructor(private _modalServ : ModalService, private _el : ElementRef) { 
    this.element = _el.nativeElement;
  }

  ngOnInit() : void {
    if(! this.id){
      console.error('modal must be have an id');
      return;
    }
    document.body.appendChild(this.element);


    this.element.addEventListener('click', _el =>{
      if(_el.target.className === 'app-admin'){
        this.close();
      }
    });


    
    this._modalServ.add(this);
  }

  ngOnDestroy() : void{
    this._modalServ.remove(this.id);
    this.element.remove();
  }

  open() : void{
    this.element.style.display = 'block';
    document.body.classList.add('app-admin-open');
  }

  close() : void{
    this.element.style.display = 'none';
    document.body.classList.remove('app-admin-opan');
  }

}
