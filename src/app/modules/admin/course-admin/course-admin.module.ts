import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseElements } from '../../shared-types';
import { CourseForm } from '../../shared';
import { TableModule } from '../../table';
import { FormModule } from '../../form';
import { AdminModule } from '../admin.module';
import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, AdminModule, TableModule, FormModule, CourseAdminRoutingModule],
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
