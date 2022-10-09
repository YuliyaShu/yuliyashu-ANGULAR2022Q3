import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SortComponent } from './header/sort/sort.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SortComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SortComponent,
  ],
})
export class CoreModule { }
