import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { CategoryService, CourseService } from '../../../shared';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoryListComponent implements OnInit {
  categoryId: number = 0;

  constructor(
    public route: ActivatedRoute // public service: CourseService, // public categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      // .pipe(tap((params: ParamMap) => console.log('params:', params)))
      .subscribe((params: ParamMap) => {
        const categoryStr = params.get('id');
        if (categoryStr) {
          this.categoryId = parseInt(categoryStr, 10);
        }
        console.log('this.categoryId:', this.categoryId);
        // if (categoryId) {
        //   this.service.getAllForCategory(this.categoryId);
        //   this.categoryService.get(this.categoryId);
        // } else {
        //   this.service.get();
        // }
      });
  }
}
