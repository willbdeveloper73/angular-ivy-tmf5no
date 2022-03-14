import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseName } from './base-name.interface';
import { CourseCategory } from './course-category.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayList } from './play-list.interface';
import { Status } from './status.interface';
import { Tag } from './tag.interface';

import { convertDate } from './utils';

export interface Course extends BaseName {
  subject?: string;
  image?: string;
  description?: string;
  duration?: string;
  provider?: string;
  datePublished?: Date;
  dateUpdated?: Date;
  rating?: number;
  playlistId?: number;
  statusId?: number;

  tags?: Partial<Tag>[];
  categories?: Partial<CourseCategory>[];
  playlist?: Partial<PlayList>;
  status?: Partial<Status>;
}

@Injectable()
export class CourseForm {
  #id: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  id$: Observable<number> = this.#id.asObservable();

  constructor(private fb: FormBuilder) {}

  parseRoute(route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map((params: ParamMap) => {
          const paramId = params.get('id');
          if (!paramId) return null;
          return parseInt(paramId, 10);
        })
      )
      .subscribe((id: number) => this.#id.next(id));
  }

  generate = (record: Partial<Course> = {}): FormGroup =>
    this.fb.group({
      id: [record?.id],
      name: [record?.name],
      playlistId: [record?.playlistId],
      subject: [record?.subject],
      image: [record?.image],
      description: [record?.description],
      statusId: [record?.statusId],
      duration: [record?.duration],
      provider: [record?.provider],
      datePublished: [convertDate(record?.datePublished)],
      dateUpdated: [convertDate(record?.dateUpdated)],
      rating: [record?.rating],
    });

  patch = (record: Partial<Course>) => ({
    ...record,
    datePublished: convertDate(record?.datePublished),
    dateUpdated: convertDate(record?.dateUpdated),
  });

  values = (form: FormGroup): Partial<Course> => ({
    id: form.get('id').value,
    name: form.get('name').value,
    playlistId: form.get('playlistId').value,
    subject: form.get('subject').value,
    image: form.get('image').value,
    description: form.get('description').value,
    statusId: parseInt(form.get('statusId').value, 10),
    duration: form.get('duration').value,
    provider: form.get('provider').value,
    datePublished: form.get('datePublished').value,
    dateUpdated: form.get('dateUpdated').value,
    rating: form.get('rating').value,
  });
}

export const CourseElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Course Name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    name: 'playlistId',
    label: 'Playlist',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
    tableDisplay: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<Course>) => null,
    tableDisplay: true,
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    tableDisplay: true,
  },
  {
    name: 'duration',
    label: 'Duration',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'provider',
    label: 'Provider',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'datePublished',
    label: 'Date Published',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'dateUpdated',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
];
