import { Component } from '@angular/core';
import { MENU_CONFIGS } from '../../../shared/side-navbar/menubar-const';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { updateBradcrumb } from '../../../shared/breadcrumb/breadcrumb.state';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.scss',
})
export class AdminLandingPageComponent {
  adminActions = MENU_CONFIGS.filter((menu) => menu.menuId == 'ADMIN')[0]
    .subMenu;

  constructor(private store: Store) {
    store.dispatch(
      updateBradcrumb({
        title: 'Admin Actions',
        path: ['Administration', 'Actions'],
      })
    );
  }
}
