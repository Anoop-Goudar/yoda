import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel-service/hotel-service.service';

@Component({
  selector: 'app-assigned-requests',
  templateUrl: './assigned-requests.component.html',
  styleUrls: ['./assigned-requests.component.css']
})
export class AssignedRequestsComponent implements OnInit {

  public assignedRequests = [];
  constructor(public hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getAssignedRequests()
                 .subscribe(success);
    function success(data) {
      this.assignedRequests = data;
      console.log(this.assignedRequests);
    }
  }

}
