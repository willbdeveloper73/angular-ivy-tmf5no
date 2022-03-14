import { Component } from '@angular/core';
import { MenuService } from '../../../menu';
import { TitleBarService } from '../../../shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(
    public menu: MenuService,
    public titlebarService: TitleBarService
  ) {}
}
