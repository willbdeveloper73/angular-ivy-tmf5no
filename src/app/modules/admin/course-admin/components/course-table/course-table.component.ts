import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Course,
  CourseElements,
  CourseAdminFilter,
} from '../../../../shared-types';

import { CrudService, CourseService } from '../../../../shared';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent implements OnInit {
  modalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modalOpen$: Observable<boolean> = this.modalOpen.asObservable();

  constructor(
    public service: CourseService,
    @Inject('COLUMNS') public columns: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.get();
  }
  add() {
    // this.router.navigate(['/admin/course/add']);
    this.service.blank();
    this.modalOpen.next(true);
  }

  edit($event: Partial<Course>) {
    // this.router.navigate(['/admin/course/edit', $event.id]);
    this.service.get($event.id);
    this.modalOpen.next(true);
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
