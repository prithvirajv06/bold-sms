import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBradcrumb } from '../../../shared/breadcrumb/breadcrumb.state';

@Component({
  selector: 'app-staff-onboarding',
  imports: [],
  templateUrl: './staff-onboarding.component.html',
  styleUrl: './staff-onboarding.component.scss',
})
export class StaffOnboardingComponent {
  constructor(private store: Store) {
    store.dispatch(
      updateBradcrumb({
        title: 'Onboarding',
        path: ['Administration ', 'Onboarding'],
      })
    );
  }
}
