import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LoginHeaderComponent,
    LoginComponent
  ],
  declarations: [HeaderComponent, LoginHeaderComponent, LoginComponent]
})
export class HotelModule { }
