import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  item = JSON.parse(localStorage.getItem('item')!) ;
  url = this.item.snippet.thumbnails.maxres.url;
  title = this.item.snippet.title;
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  publishedAt = (new Date(this.item.snippet.publishedAt)).toLocaleDateString('en-US', this.options);
  description = this.item.snippet.description;
  viewsCount = this.item.statistics.viewCount;
  likesCount = this.item.statistics.likeCount;
  dislikesCount = this.item.statistics.dislikeCount;
  commentsCount = this.item.statistics.commentCount;

  // constructor() { } Thursday, December 20, 2019

  ngOnInit(): void {
    console.log(this.item);
  }
}
