import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ThumbnailsUnit {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
    default: ThumbnailsUnit;
    medium: ThumbnailsUnit;
    high: ThumbnailsUnit;
    standard: ThumbnailsUnit;
    maxres: ThumbnailsUnit;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface ItemsList {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

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
