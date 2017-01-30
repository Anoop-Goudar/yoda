import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-assigned-requests',
  templateUrl: './assigned-requests.component.html',
  styleUrls: ['./assigned-requests.component.scss']
})
export class AssignedRequestsComponent implements OnInit {

  public assignedRequests = [];
  constructor(public hotelService: HotelService) {
  }

  ngOnInit() {
    this.getAssignedRequests();
  }
  getAssignedRequests() {
    this.hotelService.getAssignedRequests()
                 .subscribe(data => this.assignedRequests = data);
                 console.log(this.assignedRequests);
  }

}
