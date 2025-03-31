import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as d3 from 'd3';
import { updateBradcrumb } from '../../shared/breadcrumb/breadcrumb.state';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}

    constructor(private store: Store) {
      store.dispatch(updateBradcrumb({ title: 'Dashboard', path: ['Overview', 'Dashboard'] }));
    }
}
