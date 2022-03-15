import { NgModule } from '@angular/core';
import { CourseRequestElements } from '../../shared-types';
import { SharedModule, CourseRequestForm } from '../../shared';
import { FormModule } from '../../form';
import { CoursesRequestedRoutingModule } from './courses-requested-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, CoursesRequestedRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    CourseRequestForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return CourseRequestElements;
      },
    },
  ],
})
export class CoursesRequestedModule {}
