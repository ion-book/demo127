import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  protected estado: Boolean = false;
  constructor(
    protected myService: MyserviceService
  ) { }

  change() {
    this.estado = this.myService.changeStatus(this.estado);
    console.log('Padre>estado', this.estado);
  }

}
