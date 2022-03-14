import { Component, Input } from '@angular/core';
import { Pagination } from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() pagination: Partial<Pagination> = {};

  public get start() {
    return this.pagination.page * this.pagination.pageSize + 1;
  }

  public get end() {
    return (this.pagination.page + 1) * this.pagination.pageSize >=
      this.pagination.listLength
      ? this.pagination.listLength
      : (this.pagination.page + 1) * this.pagination.pageSize;
  }

  public get firstPage() {
    if (this.pagination.page + 1 - 2 >= 1) return this.pagination.page + 1 - 2;
    return 1;
  }

  range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  };

  public get lastPage() {
    return Math.ceil(this.pagination.listLength / this.pagination.pageSize);
  }

  public get pageRange() {
    console.log('page:', this.pagination.page);
    console.log('firstPage:', this.firstPage);
    console.log('lastPage:', this.lastPage);
    const range = this.range(this.firstPage, this.lastPage);
    console.log('range:', range);
    return [...range];
  }
}
