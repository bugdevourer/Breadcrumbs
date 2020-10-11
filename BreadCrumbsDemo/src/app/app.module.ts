import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbsPreviewModule } from './breadcrumbs-preview/breadcrumbs-preview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
