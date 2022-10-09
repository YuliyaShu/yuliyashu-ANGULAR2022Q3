import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './main/item/item.component';
import { SearchResultComponent } from './main/search-result/search-result.component';
import { ColorLineDirective } from '../shared/color-line/color-line.directive';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    ItemComponent,
    SearchResultComponent,
    ColorLineDirective,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    YoutubeRoutingModule,
  ],
  exports: [
    MainComponent,
    ItemComponent,
    SearchResultComponent,
    ColorLineDirective,
  ],
})
export class YoutubeModule { }
