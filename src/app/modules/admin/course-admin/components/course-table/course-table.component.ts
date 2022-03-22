import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
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
    // console.log('this.elm:', this.elm);
  }

  openModal(): void {
    this.elm.classList.remove('hidden');
    this.elm.classList.add('visible');
    // this.elm.classList.add('block');
    this.elm.style.width = '100vw';
    console.log('this.elm:', this.elm);
  }

  close(): void {
    this.elm.classList.remove('visible');
    // this.elm.classList.remove('block');
    this.elm.classList.add('hidden');

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
    console.log('edit clicked for:', $event.id);
    // this.router.navigate(['/admin/course/edit', $event.id]);
    this.service.get($event.id);
    this.openModal();
  }

  delete(item: Partial<Course>) {
    this.service.remove(item);
  }
}
