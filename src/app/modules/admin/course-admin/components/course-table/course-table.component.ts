import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Course,
  CourseElements,
  CourseAdminFilter,
} from '../../../../shared-types';

import {
  CrudService,
  CourseService,
} from '../../../../shared';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent implements OnInit, AfterViewInit {
  @ViewChild('courseModal', { static: false }) courseModal: ElementRef;
  elm: HTMLElement;

  constructor(
    public service: CourseService,
    @Inject('COLUMNS') public columns: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.get();
  }

  ngAfterViewInit(): void {
    this.elm = this.courseModal.nativeElement as HTMLElement;
  }

  openModal(): void {
    this.elm.classList.add('show');
    this.elm.style.width = '100vw';
  }

  close(): void {
    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
  }

 
  add() {
    // this.router.navigate(['/admin/course/add']);
    this.service.blank();
    this.openModal();
  }

  edit($event: Partial<Course>) {
    // this.router.navigate(['/admin/course/edit', $event.id]);
    this.service.get($event.id);
    this.openModal();
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
