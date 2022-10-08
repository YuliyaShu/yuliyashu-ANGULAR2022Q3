import { Component, Injectable, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ResponseService } from '../../main/response.service';
import { Item } from '../../interfaces/Item';
import { SortItemsService } from './sort-items.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  items: Item[] = [];
  result = this.responseService.getItems().subscribe((value) => {
    this.items = value;
    return value;
  });
  sortedItemsList: Item[] = [];

  constructor(
    private responseService: ResponseService,
    private sortItemsList: SortItemsService,
  ) { }

  ngOnInit(): void {
  }

  sortItems(sort: Sort) {
    const data = this.items.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedItemsList = data;
      this.sortItemsList.setSort(this.sortedItemsList);
      return;
    }
    this.sortedItemsList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return this.compare(
            Date.parse(a.snippet.publishedAt),
            Date.parse(b.snippet.publishedAt),
            isAsc,
          );
        case 'views':
          return this.compare(a.statistics.viewCount, b.statistics.viewCount, isAsc);
        default:
          return 0;
      }
    });
    this.sortItemsList.setSort(this.sortedItemsList);
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
