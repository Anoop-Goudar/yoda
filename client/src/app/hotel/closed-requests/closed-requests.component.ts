import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-closed-requests',
  templateUrl: './closed-requests.component.html',
  styleUrls: ['./closed-requests.component.css']
})
export class ClosedRequestsComponent implements OnInit {

  public closedRequests = [];
  constructor(public hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getClosedRequests()
                 .subscribe(success);
    function success(data) {
      this.closedRequests = data;
      console.log(this.closedRequests);
    }
  }
}
