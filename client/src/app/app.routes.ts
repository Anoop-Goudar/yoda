import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './hotel/login/login.component';
import { DashboardComponent } from './hotel/dashboard/dashboard.component';
import { OpenRequestsComponent } from './hotel/open-requests/open-requests.component';
import { ClosedRequestsComponent } from './hotel/closed-requests/closed-requests.component';
import { AssignedRequestsComponent } from './hotel/assigned-requests/assigned-requests.component';



export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'open-requests', component: OpenRequestsComponent },
  { path: 'closed-requests', component: ClosedRequestsComponent },
  { path: 'assigned-requests', component: AssignedRequestsComponent },
  { path: '**', component: AppComponent } // PageNotFoundComponent
];
