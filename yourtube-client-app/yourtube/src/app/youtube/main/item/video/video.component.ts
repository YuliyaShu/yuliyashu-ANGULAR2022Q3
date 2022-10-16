import {
  Component, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ColorLineDirective } from '../../../../shared/color-line/color-line.directive';
import { ResponseService } from '../../response.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})

export class VideoComponent implements OnInit {
  id = this.getIdFromUrl(this.router.url);
  item = this.response.getItemById(this.id);
  url = this.item.snippet.thumbnails.maxres.url;
  title = this.item.snippet.title;
  publishedAt = this.item.snippet.publishedAt;
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  publishedAtFormatted = (new Date(this.item.snippet.publishedAt)).toLocaleDateString('en-US', this.options);
  description = this.item.snippet.description;
  viewsCount = this.item.statistics.viewCount;
  likesCount = this.item.statistics.likeCount;
  dislikesCount = this.item.statistics.dislikeCount;
  commentsCount = this.item.statistics.commentCount;

  appColorLine = this.colorLine.publishedAt;

  constructor(
    private colorLine: ColorLineDirective,
    private response: ResponseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  getIdFromUrl(url: string) {
    const urlToArray = url.split('/');
    return urlToArray[urlToArray.length - 1];
  }
}
