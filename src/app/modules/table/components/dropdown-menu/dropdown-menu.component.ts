import { Component, Input, OnInit } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent implements OnInit {
  @Input() element: Partial<FormTableElement>;
  @Input() data: Partial<unknown>[] = [];
  ariaName: string;
  buildAriaName = (label: string) => label + '-control-list';

  constructor() {}

  ngOnInit() {
    this.ariaName = this.buildAriaName(
      this.element.label.toLowerCase().replace(' ', '')
    );
  }

  displayChoice($event) {
    console.log('choice selected:', {
      event: $event,
      element: this.element,
      data: this.data,
    });
  }
}
