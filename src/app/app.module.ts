import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { DetailsModule } from './details/details.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    DetailsModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
