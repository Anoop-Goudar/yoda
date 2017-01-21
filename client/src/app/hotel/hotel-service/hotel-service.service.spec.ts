/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotelServiceService } from './hotel-service.service';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelServiceService]
    });
  });

  it('should ...', inject([HotelServiceService], (service: HotelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
