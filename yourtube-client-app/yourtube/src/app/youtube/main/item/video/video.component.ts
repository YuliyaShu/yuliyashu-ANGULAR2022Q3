import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsList } from '../../../../core/interfaces/ItemsList';
import { ColorLineDirective } from '../../../../shared/color-line/color-line.directive';
import { ResponseService } from '../../response.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})

export class VideoComponent implements OnInit {
  id = '';
  item = new Observable<string | ItemsList>();
  url = '';
  title = '';
  publishedAt = '';
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  publishedAtFormatted = '';
  description = '';
  viewsCount = '';
  likesCount = '';
  dislikesCount = '';
  commentsCount = '';
  appColorLine = this.colorLine.publishedAt;

  constructor(
    private colorLine: ColorLineDirective,
    private response: ResponseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.getIdFromUrl(this.router.url);
    this.item = this.response.getItemById2(this.id);
    this.item.subscribe((itemUnit) => {
      if (typeof itemUnit === 'object' && 'items' in itemUnit) {
        this.url = itemUnit.items[0].snippet.thumbnails.high.url;
        this.title = itemUnit.items[0].snippet.title;
        this.publishedAt = itemUnit.items[0].snippet.publishedAt;
        this.publishedAtFormatted = (new Date(itemUnit.items[0].snippet.publishedAt)).toLocaleDateString('en-US', this.options);
        this.description = itemUnit.items[0].snippet.description;
        this.viewsCount = itemUnit.items[0].statistics ? itemUnit.items[0].statistics.viewCount : '?';
        this.likesCount = itemUnit.items[0].statistics ? itemUnit.items[0].statistics.likeCount : '?';
        this.dislikesCount = itemUnit.items[0].statistics ? this.generateDislikes(this.likesCount) : '?';
        this.commentsCount = itemUnit.items[0].statistics ? itemUnit.items[0].statistics.commentCount : '?';
      }
    });
  }

  getIdFromUrl(url: string) {
    const urlToArray = url.split('/');
    return urlToArray[urlToArray.length - 1];
  }

  generateDislikes(likes: string) {
    return (Number(likes) + 100).toString();
  }

  setCount(count: string) {
    return (+count) >= 1000 ? '>1k' : count;
  }
}
