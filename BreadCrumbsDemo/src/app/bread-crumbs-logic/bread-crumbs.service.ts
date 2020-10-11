import { Injectable } from '@angular/core';
import { BreadCrumb } from './BreadCrumb';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreadCrumbsService {

    private _breadCrumbs = new Subject<BreadCrumb[]>();

    public breadCrumbs$ = this._breadCrumbs.asObservable();

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute) {
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                const breadCrumbs = this.createBreadcrumbs(this._activatedRoute.root);
                this._breadCrumbs.next(breadCrumbs);
            });
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {

        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;

                const label = child.snapshot.data.breadCrumb;
       
                if (label) {
                    breadcrumbs.push({ label, url });
                }
            }

            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
    }
}

