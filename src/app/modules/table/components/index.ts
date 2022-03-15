import { ButtonAddComponent } from './button-add';
import { ButtonEditComponent } from './button-edit';
import { ButtonDeleteComponent } from './button-delete';
import { PaginationComponent } from './pagination';
import { TableComponent } from './table';
import { TableHeaderComponent } from './table-header';

export const ComponentsExport = [TableComponent];

export const Components = [
  ...ComponentsExport,
  ButtonAddComponent,
  ButtonEditComponent,
  ButtonDeleteComponent,
  PaginationComponent,
  TableHeaderComponent,
];
