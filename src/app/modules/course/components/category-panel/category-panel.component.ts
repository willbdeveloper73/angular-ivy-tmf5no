import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  providers: [CategoryService],
})
export class CategoryPanelComponent implements OnInit {
  @Input() categoryId: number = 0;

  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.get(this.categoryId);
  }
}
