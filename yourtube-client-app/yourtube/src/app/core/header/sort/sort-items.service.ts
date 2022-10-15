import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../interfaces/Item';

@Injectable({
  providedIn: 'root',
})
export class SortItemsService {
  private sortedList = new BehaviorSubject<Item[]>([]);

  setSort(value: Item[]) {
    this.sortedList.next(value);
  }

  getSort() {
    return this.sortedList;
  }
}
