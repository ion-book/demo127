import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  changeStatus(status: Boolean): Boolean{
    return !status;
  }
}
