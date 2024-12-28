import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarRoutes } from './nav-bar-routes';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(NavBarRoutes)],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavBarModule { }
