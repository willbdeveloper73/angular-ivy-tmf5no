import { Component, Input } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];
}
