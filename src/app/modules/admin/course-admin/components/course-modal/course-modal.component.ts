import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Course } from '../../../../shared-types';
import { CourseForm, CourseService, ModalService } from '../../../../shared';

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
    private modalService: ModalService,
    private router: Router,
    @Inject('COLUMNS') public elements: any
  ) {}

  ngOnInit() {
    this.form = this.courseForm.generate();

    this.service.item$
      .pipe(
        tap((item: Course) => console.log('tap:item:', item)),
        takeUntil(this.destroy$)
      )
      .subscribe((item: Course) => {
        const patchValue = this.courseForm.patch(item);
        console.log('patchValue:', patchValue);
        this.form.patchValue(patchValue);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    this.service.save(this.courseForm.values(form));
    this.modalService.close();
    // this.router.navigate(['/admin/course/list']);
  }
}
