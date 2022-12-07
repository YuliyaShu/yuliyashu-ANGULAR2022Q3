import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SortComponent } from './header/sort/sort.component';
import { SortItemsService } from './header/sort/sort-items.service';
import { CoreRoutingModule } from './core-routing.module';
import { LogOutDialogComponent } from './header/log-out-dialog/log-out-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SortComponent,
    LogOutDialogComponent,
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
    ReactiveFormsModule,
    MatDialogModule,
    CoreRoutingModule,
  ],
  providers: [
    SortItemsService,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SortComponent,
  ],
})
export class CoreModule { }
