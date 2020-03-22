import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { DetailsModule } from './details/details.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalsModule } from './modals/modals.module';
import {MainViewModule} from './main-view/main-view.module';

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
    MainViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
