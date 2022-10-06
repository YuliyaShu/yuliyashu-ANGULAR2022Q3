import { Component, Injectable, OnInit } from '@angular/core';
import { SearchService } from '../header/search/search.service';
import { Item } from '../interfaces/Item';
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
  submitted = false;
  result = this.searchService.getSubmitted().subscribe((value) => {
    this.submitted = value;
    return value;
  });

  constructor(
    private response: ResponseService,
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.response.itemsList.subscribe((items) => {
      if (Array.isArray(items)) {
        this.items = items;
      }
    });
  }
}
