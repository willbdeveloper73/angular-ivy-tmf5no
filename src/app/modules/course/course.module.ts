import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared';
import { PlayerModule } from '../player';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule, CourseRoutingModule, PlayerModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class CourseModule {}
