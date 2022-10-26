import { Component, Injectable, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseService } from '../../../youtube/main/response.service';
import { Item } from '../../interfaces/Item';
import { SortItemsService } from './sort-items.service';
import { config } from './sort.constants';

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
  sortedItemsList: Item[] = [];
  dataSource = new MatTableDataSource(this.items);

  constructor(
    private responseService: ResponseService,
    private sortItemsList: SortItemsService,
  ) {
  }

  ngOnInit(): void {
    this.responseService.getItems().subscribe((value) => {
      this.items = value;
      this.sortItemsList.setSort(value);
      this.dataSource = new MatTableDataSource(value);
      return value;
    });
  }

  sortItems(sort: Sort) {
    const data = this.items.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedItemsList = data;
      this.sortItemsList.setSort(this.sortedItemsList);
      return;
    }
    this.sortedItemsList = data.sort((a, b) => {
      const isAsc = sort.direction === config.ASCENDING_ORDER;
      switch (sort.active) {
        case config.DATE_CASE:
          return this.compare(
            Date.parse(a.snippet.publishedAt),
            Date.parse(b.snippet.publishedAt),
            isAsc,
          );
        case config.VIEWS_CASE:
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource
      .filterPredicate = (data: Item, filter: string) => data.snippet.title
        .toLocaleLowerCase().includes(filter)
      || data.snippet.description
        .toLocaleLowerCase().includes(filter);
    this.sortItemsList.setSort(this.dataSource.filteredData);
  }
}
