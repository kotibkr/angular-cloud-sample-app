import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { HomeComponent } from '../home/home.component';

export const NavBarRoutes: Routes = [
  {
    path: 'app/home',
    component: HomeComponent,
    canActivate: []
  }
];
