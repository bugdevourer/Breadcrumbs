import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsPreviewComponent } from './bread-crumbs-preview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadCrumbsPreviewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BreadCrumbsPreviewComponent]
})
export class BreadCrumbsPreviewModule { }
