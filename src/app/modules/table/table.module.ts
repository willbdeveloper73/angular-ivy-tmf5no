import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsExport, Components } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class TableModule {}
