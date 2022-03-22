import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Course } from '../../../../shared-types';
import { CourseForm, CourseService } from '../../../../shared';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
})
export class CourseModalComponent implements OnInit, OnDestroy {
  form: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private courseForm: CourseForm,
    private service: CourseService,
    private router: Router,
    @Inject('COLUMNS') public elements: any
  ) {}

  ngOnInit() {
    this.form = this.courseForm.generate();

    this.service.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Course) =>
        this.form.patchValue(this.courseForm.patch(item))
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    this.service.save(this.courseForm.values(form));
    this.router.navigate(['/admin/course/list']);
  }
}
