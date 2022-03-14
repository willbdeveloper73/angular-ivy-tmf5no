import { Course } from './course.interface';
import { BaseName } from './base-name.interface';

export interface CourseCategory extends BaseName {
  image?: string;

  courses?: Partial<Course>[];
}
