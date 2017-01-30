import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-open-requests',
  templateUrl: './open-requests.component.html',
  styleUrls: ['./open-requests.component.scss']
})
export class OpenRequestsComponent implements OnInit {

    public openRequests = [];
    constructor(public hotelService: HotelService) {
    }

    ngOnInit() {
      this.getOpenRequests();
    }
    getOpenRequests() {
      this.hotelService.getOpenRequests()
                   .subscribe(data => this.openRequests = data);
    }
}
