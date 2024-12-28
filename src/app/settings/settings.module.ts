import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SettingRoutes } from './settings.routes';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(SettingRoutes),
    MatInputModule
  ]
})
export class SettingsModule { }
