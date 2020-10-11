import { Component, Input, OnDestroy } from '@angular/core';

import { BreadCrumbsService } from '../bread-crumbs-logic/bread-crumbs.service';
import { Subscription } from 'rxjs';
import { BreadCrumb } from '../bread-crumbs-logic/BreadCrumb';

@Component({
  selector: 'app-bread-crumbs-preview',
  templateUrl: './bread-crumbs-preview.component.html',
  styleUrls: ['./bread-crumbs-preview.component.scss']
})
export class BreadCrumbsPreviewComponent implements OnDestroy {
  
  private _subscription: Subscription;

  public breadCrumbs: BreadCrumb[] = []

  constructor(
    private _breadCrumbsService: BreadCrumbsService
    ) {
    this._subscription = this._breadCrumbsService.breadCrumbs$.subscribe(
      breadCrumbs => {
        this.breadCrumbs = breadCrumbs;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
