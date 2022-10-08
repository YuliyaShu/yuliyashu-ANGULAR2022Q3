import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit(): void {
  }
}
