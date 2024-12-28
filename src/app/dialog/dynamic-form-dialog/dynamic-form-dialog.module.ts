import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DynamicFormDialogComponent } from './dynamic-form-dialog.component';



@NgModule({
  declarations: [DynamicFormDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // MatDialogModule, 
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,
    // MatSidenavModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DynamicFormDialogModule { }
