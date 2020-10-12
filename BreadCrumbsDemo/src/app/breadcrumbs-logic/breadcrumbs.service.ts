import { Injectable } from '@angular/core';
import { Breadcrumb } from './Breadcrumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreadcrumbsService {

    private _breadcrumbs = new Subject<Breadcrumb[]>();

    public breadcrumbs$ = this._breadcrumbs.asObservable();

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute) {
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                const breadcrumbs = this.createBreadcrumbs(this._activatedRoute.root);
                this._breadcrumbs.next(breadcrumbs);
            });
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {

        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;

                const label = child.snapshot.data.breadcrumb;
       
                if (label) {
                    const labelWithEnumerator = this.getLabelWithEnumerator(label, breadcrumbs);
                    breadcrumbs.push(new Breadcrumb(labelWithEnumerator, url));
                }
            }

            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
    }

    private getLabelWithEnumerator(label: string, breadcrumbs: Breadcrumb[]): string{
        const numberOfAppearances = breadcrumbs.filter(b => b.label.startsWith(label)).length;
        if(numberOfAppearances > 0){
            return [label, numberOfAppearances + 1].join(' ');
        } else {
            return label;
        }
    }
}

