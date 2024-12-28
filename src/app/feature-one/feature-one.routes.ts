import { Routes } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';
import { AuthGuard } from '../_guards/auth-guard';

export const FeatureOneRoutes: Routes = [
  {
    path: '',
    component: FeatureOneComponent,
    canActivate: [AuthGuard]
  }
];
