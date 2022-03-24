import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
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
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class CourseTableComponent implements OnInit, AfterViewInit {
  @ViewChild('courseModal', { static: false }) courseModal: ElementRef;
  elm: HTMLElement;

  menuState: string = 'out';

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
    this.menuState = 'in';
    this.elm.classList.remove('hidden');
    this.elm.classList.add('visible');
    this.elm.style.width = '100vw';
    // console.log('this.elm:', this.elm);
  }

  close(): void {
    this.menuState = 'out';
    this.elm.classList.remove('visible');
    this.elm.classList.add('hidden');

    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
    // console.log('this.elm:', this.elm);
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
