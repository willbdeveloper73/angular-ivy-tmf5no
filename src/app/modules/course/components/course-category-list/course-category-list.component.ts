import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import {
  Category,
} from '../../../shared-types';
import {
//   Category,
  CategoryService,
  CourseService,
  TitleBarService,
} from '../../../shared';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
})
export class CourseCategoryListComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    public route: ActivatedRoute,
    public service: CourseService,
    public categoryService: CategoryService,
    public titlebarService: TitleBarService
  ) {}

  ngOnInit() {
    this.route.paramMap
      // .pipe(tap((params: ParamMap) => console.log('params:', params)))
      .subscribe((params) => {
        const categoryStr = params.get('id');
        let categoryId = 0;
        if (categoryStr) {
          categoryId = parseInt(categoryStr, 10);
        }
        if (categoryId) {
          this.service.getAllForCategory(categoryId);
          this.categoryService.get(categoryId);
        } else {
          this.service.get();
        }
      });

    // this.categoryService.item$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((category: Partial<CourseCategory>) =>
    //     this.titlebarService.setTitle(category.name + ' Courses')
    //   );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
