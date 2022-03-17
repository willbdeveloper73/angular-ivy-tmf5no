import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-column-selector-item',
  templateUrl: './column-selector-item.component.html',
})
export class ColumnSelectorItemComponent {
  @Input() item: Partial<FormTableElement> = {};
  @Output() change: EventEmitter<Partial<FormTableElement>> = new EventEmitter<
    Partial<FormTableElement>
  >();

  onChange() {
    this.item.display = !this.item.display;
    this.change.emit(this.item);
  }
}
