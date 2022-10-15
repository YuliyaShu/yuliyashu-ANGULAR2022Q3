import {
  Component, OnInit, Input, Injectable,
} from '@angular/core';
import { Item } from '../../../core/interfaces/Item';
import { ColorLineDirective } from '../../../shared/color-line/color-line.directive';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() videoThumbnail = '';
  @Input() viewsCount = '';
  @Input() likesCount = '';
  @Input() dislikesCount = '';
  @Input() commentsCount = '';
  @Input() videoTitle = '';
  @Input() publishedAt = '';
  @Input() id = '';
  @Input() item = {} as Item;

  appColorLine = this.colorLine.publishedAt;

  constructor(private colorLine: ColorLineDirective) {

  }
  ngOnInit(): void {
  }

  clickedItem(item: Item) {
    localStorage.setItem('item', JSON.stringify(item));
  }
}
