import { Injectable } from '@angular/core';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

//Type
export interface BreadcrumbState {
  title: string;
  path: string[];
}

//Actions
export const InitialBreadcrumb: BreadcrumbState = {
  title: 'Dashboard',
  path: ['Overview', 'Dashboard'],
};

export const updateBradcrumb = createAction(
  '[Message]  Update',
  props<{ title: string; path: string[] }>()
);
//Action Ends

//Reducer
export const breadcrumbRedeucer = createReducer(
  InitialBreadcrumb,
  on(updateBradcrumb, (state, { title, path }) => ({
    ...state,
    title: title,
    path: path,
  }))
);
export const breadCrumbSelectorState =
  createFeatureSelector<BreadcrumbState>('breadcrumb');

export const selectBreadcrumbTitle = createSelector(
  breadCrumbSelectorState,
  (state: any) => state.title
);

export const selectBreadcrumbPath = createSelector(
  breadCrumbSelectorState,
  (state: any) => state.path
);

@Injectable()
export class BreadcrumbService {
  constructor() {}
}
