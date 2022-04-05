import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';

// https://netbasal.com/building-a-simple-carousel-component-with-angular-3a94092b7080

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
