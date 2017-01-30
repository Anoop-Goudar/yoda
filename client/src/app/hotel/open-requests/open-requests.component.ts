import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-open-requests',
  templateUrl: './open-requests.component.html',
  styleUrls: ['./open-requests.component.css']
})
export class OpenRequestsComponent implements OnInit {

    public openRequests = [];
    constructor(public hotelService: HotelService) {
    }

    ngOnInit() {
      this.hotelService.getOpenRequests()
                   .subscribe(success);
      function success(data) {
        this.openRequests = data;
        console.log(this.openRequests);
      }
    }
}
