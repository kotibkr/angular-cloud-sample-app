import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'app/home',
    loadChildren: () => import('../app/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'app/feature-one',
    loadChildren: () => import('../app/feature-one/feature-one.module').then(x => x.FeatureOneModule)
  }, {
    path: 'app/feature-two',
    loadChildren: () => import('../app/feature-two/feature-two.module').then(x => x.FeatureTwoModule)
  }
];
