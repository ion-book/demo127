import { Component, OnChanges, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnChanges {
  @Input() atributo: Boolean;
  protected estado1: Boolean = false;

  constructor(
    protected myService: MyserviceService
  ) { }

  ngOnChanges() {
    this.estado1 = this.myService.changeStatus(this.estado1);
    console.log('Hijo1>estado1', this.estado1);
  }

}
