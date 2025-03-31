import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreadcrumbState,
  selectBreadcrumbPath,
  selectBreadcrumbTitle,
} from './breadcrumb.state';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [AsyncPipe],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  breadcrumb$: Observable<string>;
  breadcrumbPath$: Observable<string[]>;
  path = '';
  constructor(private store: Store) {
    this.breadcrumb$ = store.select(selectBreadcrumbTitle);
    this.breadcrumbPath$ = store.select(selectBreadcrumbPath);
    this.breadcrumbPath$.subscribe((_path) => {
      this.path = _path.join(' / ');
    });
  }
}
