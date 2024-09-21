import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FeatureOneComponent } from './feature-one.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FeatureOneRoutes } from './feature-one.routes';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCustomTableComponent } from '../shared/components/mat-custom-table/mat-custom-table.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [FeatureOneComponent, MatCustomTableComponent],
  imports: [CommonModule, RouterModule.forChild(FeatureOneRoutes),
    MatCardModule, FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CdkTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FeatureOneModule { }
