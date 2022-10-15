import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ItemsList } from '../../core/interfaces/ItemsList';
import { Item } from '../../core/interfaces/Item';

@Injectable({
  providedIn: 'root',
})

export class ResponseService {
  url = '../../response.json';
  itemsList = this.getItemsList();
  items = new BehaviorSubject<Item[]>([]);

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

  setItems(items: Item[]) {
    this.items.next(items);
  }

  getItems() {
    return this.items;
  }
}
