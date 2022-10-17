import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ItemsList } from '../../core/interfaces/ItemsList';
import { Item } from '../../core/interfaces/Item';

@Injectable({
  providedIn: 'root',
})

export class ResponseService {
  key = 'AIzaSyAKGSX3yFnXH9U6RaRIPC6tANeiZeX4Kpk';
  url = 'https://www.googleapis.com/youtube/v3/search?';
  urlStat = 'https://www.googleapis.com/youtube/v3/videos?';
  items = new BehaviorSubject<Item[]>([]);

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) { }

  getItemsList(inputSearch: string) {
    return this.http.get<ItemsList>(this.url, {
      params: {
        key: this.key,
        type: 'video',
        part: 'snippet',
        maxResults: 10,
        q: inputSearch,
      },
    })
      .pipe(
        map((value) => {
          this.items.next(value.items);
          value.items.forEach((item) => {
            this.getStatisticsById(item.id.videoId).subscribe((stat) => {
              if (typeof stat === 'object') {
                Object.defineProperties(item, {
                  statistics: {
                    value: stat.items[0].statistics,
                  },
                });
              }
            });
          });
          return value;
        }),
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

  getItemById(id: string) {
    let result!: Item;
    if (this.items.value instanceof Array) {
      const itemWithProperId = this.items.value.filter((item) => item.id.videoId === id);
      if (itemWithProperId.length) {
        [result] = itemWithProperId;
      } else {
        this.router.navigateByUrl(id);
      }
    }
    return result;
  }

  getStatisticsById(idForStat: string) {
    return this.http.get<ItemsList>(this.urlStat, {
      params: {
        key: this.key,
        part: 'statistics',
        id: idForStat,
      },
    })
      .pipe(
        map((value) => {
          Object.defineProperties(value.items[0].statistics, {
            dislikeCount: {
              value: Math.round(Math.random() * 100).toString(),
            },
          });
          return value;
        }),
        catchError((err: Error) => {
          this.openSnackBar(err.message);
          return err.message;
        }),
      );
  }
}
