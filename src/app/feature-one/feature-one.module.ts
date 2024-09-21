import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FeatureOneComponent } from './feature-one.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FeatureOneRoutes } from './feature-one.routes';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [FeatureOneComponent],
  imports: [CommonModule, RouterModule.forChild(FeatureOneRoutes),
    MatCardModule, MatCardModule, FlexLayoutModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FeatureOneModule { }
