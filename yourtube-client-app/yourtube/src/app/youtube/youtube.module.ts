import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './main/item/item.component';
import { SearchResultComponent } from './main/search-result/search-result.component';

@NgModule({
  declarations: [
    MainComponent,
    ItemComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainComponent,
    ItemComponent,
    SearchResultComponent,
  ],
})
export class YoutubeModule { }
