import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { ItemsList } from '../interfaces/ItemsList';

@Injectable({
  providedIn: 'root',
})

export class ResponseService {
  url = '../../response.json';
  itemsList = this.getItemsList();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getItemsList() {
    return this.http.get<ItemsList>(this.url)
      .pipe(
        map((value) => value.items),
        catchError((err: Error) => {
          this.openSnackBar(err.message);
          return err.message;
        }),
      );
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Undo', { duration: 3000 });
  }
}
