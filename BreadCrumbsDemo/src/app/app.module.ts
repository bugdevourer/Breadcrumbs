import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbsModule } from './bread-crumbs/bread-crumbs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadCrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
