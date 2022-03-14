import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of, forkJoin } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// import { TitleBarService } from '../services/title-bar.service';
import { CourseCategory } from '../models';
import { CourseCategoryService, TitleBarService } from '../services';

@Injectable({ providedIn: 'root' })
export class PageTitleResolver implements Resolve<{ any }> {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleBarService,
    private categoryService: CourseCategoryService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // console.log({ route, activatedRoute: this.activatedRoute });
    if (!route?.params?.id) {
      this.titleService.setTitle(route.data.title);
    } else {
      if (route?.url[0]?.path === 'category') {
        const categoryId = parseInt(route?.url[1]?.path, 10);
        if (categoryId) {
          this.categoryService.get(categoryId);
          this.categoryService.item$.subscribe(
            (category: Partial<CourseCategory>) =>
              this.titleService.setTitle(`${category.name} Courses`)
          );
        }
      }
    }
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     map(() => {
    //       const child = this.activatedRoute.firstChild;
    //       if (child.snapshot.data['title']) {
    //         return child.snapshot.data['title'];
    //       }
    //       return '';
    //     })
    //   )
    //   .subscribe((ttl: string) => {
    //     this.titleService.setTitle(ttl);
    //   });
    return of(null);
  }
}
