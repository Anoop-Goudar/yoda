import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './hotel/login/login.component';



export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', component: AppComponent } // PageNotFoundComponent
];
