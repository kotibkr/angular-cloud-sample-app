import { Routes } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';

export const FeatureOneRoutes: Routes = [
  {
    path: '',
    component: FeatureOneComponent,
    canActivate: []
  }
];
