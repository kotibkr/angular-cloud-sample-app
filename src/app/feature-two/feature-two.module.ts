import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureTwoRoutes } from './feature-two.routes';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FeatureTwoRoutes),
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ]
})
export class FeatureTwoModule { }
