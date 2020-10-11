import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './bread-crumbs.component';

@NgModule({
  declarations: [BreadCrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadCrumbsComponent]
})
export class BreadCrumbsModule { }
