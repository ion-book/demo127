import { Component, OnChanges, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnChanges {
  @Input() atributo: Boolean;
  protected estado2: Boolean = false;

  constructor(
    protected myService: MyserviceService
  ) { }

  ngOnChanges() {
    this.estado2 = this.myService.changeStatus(this.estado2);
    console.log('Hijo2>estado2', this.estado2);
  }

}
