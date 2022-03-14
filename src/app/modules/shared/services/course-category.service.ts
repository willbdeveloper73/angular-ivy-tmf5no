import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { rawCourseCategory } from './rawData';
import { CourseCategory } from '../models';

@Injectable({ providedIn: 'root' })
export class CourseCategoryService extends CrudService<CourseCategory> {
  _items = rawCourseCategory;

  constructor() {
    super();
  }
}
