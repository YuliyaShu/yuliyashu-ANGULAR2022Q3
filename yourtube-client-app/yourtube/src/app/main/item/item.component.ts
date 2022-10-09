import { Component, OnInit, Input } from '@angular/core';
import { ColorLineDirective } from '../../shared/color-line/color-line.directive';

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

  appColorLine = this.colorLine.publishedAt;

  constructor(private colorLine: ColorLineDirective) {

  }
  ngOnInit(): void {
  }
}
