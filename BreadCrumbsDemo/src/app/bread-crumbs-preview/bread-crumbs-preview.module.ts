import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsPreviewComponent } from './bread-crumbs-preview.component';

@NgModule({
  declarations: [BreadCrumbsPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadCrumbsPreviewComponent]
})
export class BreadCrumbsPreviewModule { }
