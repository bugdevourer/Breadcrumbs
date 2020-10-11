import { Component, OnDestroy } from '@angular/core';

import { BreadcrumbsService } from '../breadcrumbs-logic/breadcrumbs.service';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../breadcrumbs-logic/Breadcrumb';

@Component({
  selector: 'app-breadcrumbs-preview',
  templateUrl: './breadcrumbs-preview.component.html',
  styleUrls: ['./breadcrumbs-preview.component.scss']
})
export class BreadcrumbsPreviewComponent implements OnDestroy {
  
  private _subscription: Subscription;

  public breadcrumbs: Breadcrumb[] = []

  constructor(
    private _breadcrumbsService: BreadcrumbsService
    ) {
    this._subscription = this._breadcrumbsService.breadcrumbs$.subscribe(
      breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
