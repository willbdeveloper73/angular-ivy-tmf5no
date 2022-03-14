import { CourseAdminComponent } from './course-admin';
import { CourseTableComponent } from './course-table';
import { LayoutComponent } from './layout';

export const ComponentsExport = [];

export const Components = [
  ...ComponentsExport,
  CourseAdminComponent,
  CourseTableComponent,
  LayoutComponent,
];

export * from './course-admin';
export * from './course-table';
export * from './layout';
