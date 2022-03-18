import { Component, Input, OnInit } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent implements OnInit {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];

  columnAriaName: string;

  buildAriaName = (label: string) => label + '-control-list';

  constructor() {}

  ngOnInit() {
    this.columnAriaName = this.buildAriaName(
      this.element.label.toLowerCase().replace(' ', '')
    );
  }

  choices = [{ label: 'Sort' }, { label: 'Filter' }];

  displayMenu() {
    console.log('clicked');
  }

  displayChoice($event) {
    console.log('choice selected:', {
      event: $event,
      element: this.element,
      data: this.data,
    });
  }
}
