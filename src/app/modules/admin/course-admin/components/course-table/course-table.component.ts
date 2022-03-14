import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Course,
  CourseElements,
  CrudService,
  CourseService,
} from '../../../../shared';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent implements OnInit {
  constructor(
    public service: CourseService,
    @Inject('COLUMNS') public columns: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.get();
  }

  add() {
    this.router.navigate(['/admin/course/add']);
  }

  edit($event: Partial<Course>) {
    this.router.navigate(['/admin/course/edit', $event.id]);
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
