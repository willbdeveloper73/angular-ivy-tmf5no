import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './base-form.service';
import { Course } from '../models';

import { convertDate } from './utils';

@Injectable()
export class CourseForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  override parseRoute(route: ActivatedRoute) {
    super.parseRoute(route);
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
    playlistId: parseInt(form.get('playlistId').value, 10),
    subject: form.get('subject').value,
    image: form.get('image').value,
    description: form.get('description').value,
    statusId: parseInt(form.get('statusId').value, 10),
    duration: form.get('duration').value,
    provider: form.get('provider').value,
    datePublished: new Date(form.get('dateUpdated').value),
    dateUpdated: new Date(form.get('dateUpdated').value),
    rating: form.get('rating').value,
  });
}
