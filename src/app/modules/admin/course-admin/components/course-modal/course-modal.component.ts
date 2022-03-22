import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
})
export class CourseModalComponent implements OnInit, OnDestroy {
    form: FormGroup;
    destroy$: Subject<boolean> = new Subject<boolean>();
  
    constructor(
      private courseForm: CourseForm,
      @Inject('COLUMNS') public elements: any,
      private route: ActivatedRoute,
      private router: Router
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
