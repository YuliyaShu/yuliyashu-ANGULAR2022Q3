import { Component, OnInit } from '@angular/core';
import { Item, ResponseService } from './response.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: Item[] = [];

  constructor(private response: ResponseService) { }

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
