import { Injectable } from '@angular/core';

@Injectable()
export class HotelService {

  constructor() { }
  callService() {
    console.log('service called');
  }
}
