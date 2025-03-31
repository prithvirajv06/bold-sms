import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { updateBradcrumb } from '../../../shared/breadcrumb/breadcrumb.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-role-management',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss',
})
export class RoleManagementComponent {
  constructor(private store: Store) {
    store.dispatch(
      updateBradcrumb({ title: 'Role Management', path: ['Administration ', 'Role Management'] })
    );
  }
}
