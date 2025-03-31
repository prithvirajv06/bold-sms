import { Routes } from '@angular/router';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { AdminLandingPageComponent } from './domain/administration/admin-landing-page/admin-landing-page.component';
import { RoleManagementComponent } from './domain/administration/role-management/role-management.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'admin', component: AdminLandingPageComponent },
  { path: 'role-management', component: RoleManagementComponent },
];
