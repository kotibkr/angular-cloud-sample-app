import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureTwoRoutes } from './feature-two.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FeatureTwoRoutes)]
})
export class FeatureTwoModule {}
