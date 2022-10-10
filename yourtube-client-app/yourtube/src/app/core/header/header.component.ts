import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from './sort/sort.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settingsOn = false;
  result = this.sortService.getSettingsOn().subscribe((value) => {
    this.settingsOn = value;
    return value;
  });
  count = 0;
  constructor(private sortService: SortService, private router: Router) { }

  ngOnInit(): void {
  }

  onSettings() {
    if (this.count % 2) {
      this.settingsOn = false;
    } else {
      this.settingsOn = true;
    }
    this.count += 1;
    this.sortService.setSettingsOn(this.settingsOn);
  }

  isVideoRoute() {
    console.log((this.router.url));
    console.log(!(this.router.url.includes('video')));
    return !(this.router.url.includes('video'));
  }
}
