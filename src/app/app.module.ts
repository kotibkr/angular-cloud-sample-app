import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, 
    RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' }), 
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSidenavModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    provideHttpClient(),
    provideOAuthClient()
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
