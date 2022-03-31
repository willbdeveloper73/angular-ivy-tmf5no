import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FormTableElement, PlayList, Status } from '../../../shared-types';
import { PlayListService, StatusService, UserService } from '../../../shared';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
})
export class DisplayFormComponent implements OnInit, OnDestroy {
  @Input() Form: FormGroup;
  @Input() elements: Partial<FormTableElement>[] = [];
  @Input() displaySave: boolean = true;
  @Output() formSave: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private statusService: StatusService,
    private playlistService: PlayListService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.checkService({ service: this.statusService, columnName: 'statusId' });

    this.checkService({
      service: this.playlistService,
      columnName: 'playlistId',
    });

    this.checkService({ service: this.userService, columnName: 'authorId' });

    console.log('this.Form:', this.Form);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  checkService({ service: checkService, columnName }) {
    const index = this.elements?.findIndex((item) => item.name === columnName);
    if (index >= 0) {
      checkService.get();
      checkService.items$
        .pipe(
          map((items: unknown[]) => (this.elements[index].options = items)),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  save() {
    this.formSave.emit(this.Form);
  }
}
