import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseName } from './base-name.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayListSource } from './play-list-source.interface';
import { User } from './user.interface';
import { Status } from './status.interface';
import { convertDate } from './utils';

export interface PlayListItem extends BaseName {
  seq?: number;
  description?: string;
  statusId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  authorId?: number;
  duration?: number;
  watched?: boolean;
  sources?: Partial<PlayListSource>[];
  status?: Partial<Status>[];
  author?: Partial<User>;
}

export const generatePlayListItemForm = (
  // fb: FormBuilder,
  record: Partial<PlayListItem> = {}
): FormGroup => {
  const fb = new FormBuilder();
  return fb.group({
    id: [record?.id],
    name: [record?.name],
    seq: [record?.seq],
    description: [record?.description],
    statusId: [record?.statusId],
    createdAt: [convertDate(record?.createdAt)],
    updatedAt: [convertDate(record?.updatedAt)],
    deletedAt: [convertDate(record?.deletedAt)],
    authorId: [record?.authorId],
    duration: [record?.duration],
    watched: [record?.watched],
  });
};

export const generatePlayListItemFromForm = (form: FormGroup): PlayListItem => {
  const record: Partial<PlayListItem> = {
    id: form.get('id').value,
    name: form.get('name').value,
    seq: parseInt(form.get('seq').value, 10),
    description: form.get('description').value,
    statusId: parseInt(form.get('statusId').value, 10),
    createdAt: form.get('createdAt').value,
    updatedAt: form.get('updatedAt').value,
    deletedAt: form.get('deletedAt').value,
    authorId: parseInt(form.get('authorId').value, 10),
    duration: form.get('duration').value,
    watched: form.get('watched').value,
  };
  return record;
};

export const PlayListItemElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Item Name',
    type: 'text',
    // data: (row: Partial<PlayListItem>) => row.name,
    required: true,
    tableDisplay: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: [],
    data: (row: Partial<PlayListItem>) => null,
    tableDisplay: true,
  },
  {
    name: 'authorId',
    label: 'Author',
    type: 'select',
    options: [],
    data: (row: Partial<PlayListItem>) => null,
    tableDisplay: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    // data: (row: Partial<PlayListItem>) => row.description,
    tableDisplay: true,
  },
  {
    name: 'seq',
    label: 'Sequence',
    type: 'text',
    // data: (row: Partial<PlayListItem>) => row.seq,
    tableDisplay: true,
  },
  {
    name: 'createdAt',
    label: 'Date Created',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'updatedAt',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'deletedAt',
    label: 'Date Deleted',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: false,
  },
  {
    name: 'duration',
    label: 'Duration',
    type: 'text',
    // data: (row: Partial<PlayListItem>) => row.duration,
    tableDisplay: false,
  },
  {
    name: 'watched',
    label: 'Watched',
    type: 'text',
    // data: (row: Partial<PlayListItem>) => row.watched,
    tableDisplay: false,
  },
];
