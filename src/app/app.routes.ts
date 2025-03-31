import { Routes } from '@angular/router';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { AdminLandingPageComponent } from './domain/administration/admin-landing-page/admin-landing-page.component';
import { RoleManagementComponent } from './domain/administration/role-management/role-management.component';
import { RoleCreationComponent } from './domain/administration/role-creation/role-creation.component';
import { UserAssignmentComponent } from './domain/administration/user-assignment/user-assignment.component';
import { RoleOverviewComponent } from './domain/administration/role-overview/role-overview.component';
import { StaffOnboardingComponent } from './domain/administration/staff-onboarding/staff-onboarding.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'admin', component: AdminLandingPageComponent },
  {
    path: 'role-management',
    component: RoleManagementComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: RoleOverviewComponent },
      { path: 'user-assignment', component: UserAssignmentComponent },
    ],
  },
  { path: 'role-creation', component: RoleCreationComponent },
  { path: 'staff-onboarding', component: StaffOnboardingComponent },
];
