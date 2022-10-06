import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './header/search/search.component';
import { SortComponent } from './header/sort/sort.component';
import { LoginComponent } from './header/login/login.component';
import { ItemComponent } from './main/item/item.component';
import { SearchResultComponent } from './main/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    MainComponent,
    SearchComponent,
    SortComponent,
    LoginComponent,
    ItemComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
