import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './hotel/login/login.component';
import { DashboardComponent } from './hotel/dashboard/dashboard.component';



export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: AppComponent } // PageNotFoundComponent
];
