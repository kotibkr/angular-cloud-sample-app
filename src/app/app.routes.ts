import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app/home'
  },
  {
    path: 'app/home',
    loadChildren: () => import('../app/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'app/my-orders',
    loadChildren: () => import('../app/feature-one/feature-one.module').then(x => x.FeatureOneModule)
  }, 
  {
    path: 'app/my-referals',
    loadChildren: () => import('../app/feature-two/feature-two.module').then(x => x.FeatureTwoModule)
  },
  {
    path: 'app/referal',
    loadChildren: () => import('../app/referral/referral.module').then(x => x.ReferralModule)
  },
  {
    path: 'app/settings',
    loadChildren: () => import('../app/settings/settings.module').then(x => x.SettingsModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegisterComponent
  }
];
