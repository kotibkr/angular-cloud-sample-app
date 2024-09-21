import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule]
})
export class MaterialModule { }
