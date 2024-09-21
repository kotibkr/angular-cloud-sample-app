import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(HomeRoutes),
    MaterialModule, MatCardModule, FlexLayoutModule
  ]
})
export class HomeModule { }
