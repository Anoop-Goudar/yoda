import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelService } from './hotel-service/hotel-service.service';
import { OpenRequestsComponent } from './open-requests/open-requests.component';
import { ClosedRequestsComponent } from './closed-requests/closed-requests.component';
import { AssignedRequestsComponent } from './assigned-requests/assigned-requests.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoginHeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [
    HotelService
  ],
  declarations: [HeaderComponent, LoginHeaderComponent, LoginComponent, DashboardComponent, OpenRequestsComponent, ClosedRequestsComponent, AssignedRequestsComponent]
})
export class HotelModule { }
