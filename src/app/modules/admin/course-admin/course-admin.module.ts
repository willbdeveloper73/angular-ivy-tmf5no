import { NgModule } from '@angular/core';
import { CourseElements } from '../../shared-types';
import { SharedModule, CourseForm } from '../../shared';
import { SharedModule, CourseForm } from '../../shared';
import { FormModule } from '../../form';
import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  // imports: [SharedModule, FormModule, CourseAdminRoutingModule],
  imports: [TableModule, FormModule, CourseAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    CourseForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseElements;
      },
    },
  ],
})
export class CourseAdminModule {}
