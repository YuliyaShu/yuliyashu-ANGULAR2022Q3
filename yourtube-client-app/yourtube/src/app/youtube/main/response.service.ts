import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ItemsList } from '../../core/interfaces/ItemsList';
import { Item } from '../../core/interfaces/Item';
import { ItemsListStat } from '../../core/interfaces/ItemsListStat';

@Injectable({
  providedIn: 'root',
})

export class ResponseService {
  key = 'AIzaSyBJ5YVknsAoMw8AGer60XzVWD-MKJujgkE';
  url = 'https://www.googleapis.com/youtube/v3/search?';
  urlStat = 'https://www.googleapis.com/youtube/v3/videos?';
  items = new BehaviorSubject<Item[]>([]);
  ids: string[] = [];

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
            this.ids.push(item.id.videoId);
          });
          this.getStatisticsByIds(this.ids).subscribe((stat) => {
            if (typeof stat === 'object') {
              value.items.forEach((item) => {
                const statisticsForProperty = stat.items
                  .filter((itemStat) => itemStat.id === item.id.videoId);
                console.log('🚀 ~ statisticsForProperty', statisticsForProperty);
                Object.defineProperties(item, {
                  statistics: {
                    value: statisticsForProperty[0].statistics,
                  },
                });
              });
            }
          });
          console.log('🚀 ~ value', value);
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

  getStatisticsByIds(idsForStat: string[]) {
    return this.http.get<ItemsListStat>(this.urlStat, {
      params: {
        key: this.key,
        part: 'statistics',
        id: idsForStat.join(','),
      },
    })
      .pipe(
        map((value) => {
          value.items.forEach((item) => {
            Object.defineProperties(item.statistics, {
              dislikeCount: {
                value: (Number(item.statistics.likeCount) + 100).toString(),
              },
            });
          });
          console.log(value);
          return value;
        }),
        catchError((err: Error) => {
          this.openSnackBar(err.message);
          return err.message;
        }),
      );
  }
}
