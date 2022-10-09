import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorLineDirective } from './color-line/color-line.directive';

@NgModule({
  declarations: [
    ColorLineDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorLineDirective,
  ],
})
export class SharedModule { }
