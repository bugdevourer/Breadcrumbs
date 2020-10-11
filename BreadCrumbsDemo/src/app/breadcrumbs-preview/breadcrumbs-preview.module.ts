import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsPreviewComponent } from './breadcrumbs-preview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsPreviewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BreadcrumbsPreviewComponent]
})
export class BreadcrumbsPreviewModule { }
