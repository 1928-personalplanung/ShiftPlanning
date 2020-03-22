import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainViewModule} from './main-view/main-view.module';
import {DetailsModule} from './details/details.module';
import {ModalsModule} from './modals/modals.module';

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
    ModalsModule,
    MainViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
