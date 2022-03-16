import { Component, Input } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-column-selector-item',
  templateUrl: './column-selector-item.component.html',
})
export class ColumnSelectorItemComponent {
  @Input() item: Partial<FormTableElement> = {};
}
