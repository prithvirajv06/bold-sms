import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { SideNavbarComponent } from "./shared/side-navbar/side-navbar.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { DashboardComponent } from "./domain/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideNavbarComponent, BreadcrumbComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bold-sms-repo';
}
