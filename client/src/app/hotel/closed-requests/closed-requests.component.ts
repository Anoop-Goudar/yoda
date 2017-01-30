import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-closed-requests',
  templateUrl: './closed-requests.component.html',
  styleUrls: ['./closed-requests.component.scss']
})
export class ClosedRequestsComponent implements OnInit {

  public closedRequests = [];
  constructor(public hotelService: HotelService) {
  }

  ngOnInit() {
    this.getClosedRequests();
  }
  getClosedRequests() {
    this.hotelService.getClosedRequests()
                 .subscribe(data => this.closedRequests = data);
                 console.log(this.closedRequests);
  }
}
