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

  async getItems() {
    await this.response.itemsList.then((resp) => {
      this.items = resp.items;
    });
  }
}
