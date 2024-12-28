import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AuthGuard } from '../_guards/auth-guard';

export const SettingRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
];
