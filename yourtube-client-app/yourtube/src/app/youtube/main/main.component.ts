import { Component, Injectable, OnInit } from '@angular/core';
import { SearchService } from '../../core/header/search/search.service';
import { SortItemsService } from '../../core/header/sort/sort-items.service';
import { Item } from '../../core/interfaces/Item';
import { ResponseService } from './response.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: Item[] = [];
  sortedItems: Item[] = [];
  result = this.responseService.getItems().subscribe((value) => {
    this.items = value;
    this.sortedItems = value;
    return value;
  });
  resultSort = this.sortItems.getSort().subscribe((value) => {
    this.sortedItems = value;
    return value;
  });
  submitted = false;
  resultSearch = this.searchService.getSubmitted().subscribe((value) => {
    this.submitted = value;
    return value;
  });

  constructor(
    private responseService: ResponseService,
    private searchService: SearchService,
    private sortItems: SortItemsService,
  ) { }

  ngOnInit() {
  }
}
