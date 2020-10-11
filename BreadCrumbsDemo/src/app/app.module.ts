import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadCrumbsPreviewModule } from './bread-crumbs-preview/bread-crumbs-preview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadCrumbsPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
