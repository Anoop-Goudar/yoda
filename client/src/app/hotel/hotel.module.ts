import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LoginHeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  declarations: [HeaderComponent, LoginHeaderComponent, LoginComponent, DashboardComponent]
})
export class HotelModule { }
