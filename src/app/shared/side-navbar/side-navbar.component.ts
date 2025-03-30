import { Component } from '@angular/core';
import { MENU_CONFIGS } from './menubar-const';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  menuItem = MENU_CONFIGS;
}
