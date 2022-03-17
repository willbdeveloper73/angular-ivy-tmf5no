import { Component, Input } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];

  get ariaName() {
    return this.element.label.toLowerCase().replace(' ', '') + '-control-list';
  }

  choices = [{ label: 'Sort' }, { label: 'Filter' }];

  displayMenu() {
    console.log('clicked');
  }
}
