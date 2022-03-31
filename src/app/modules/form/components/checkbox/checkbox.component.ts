import { Component, Host, Input } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() value: string;
  @Input() label: string;

  constructor(@Host() public checkboxGroup: CheckboxGroupComponent) {}
}