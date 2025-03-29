import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { SideNavbarComponent } from "./shared/side-navbar/side-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bold-sms-repo';
}
