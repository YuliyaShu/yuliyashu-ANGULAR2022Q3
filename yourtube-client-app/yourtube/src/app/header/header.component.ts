import { Component, OnInit } from '@angular/core';
import { SortService } from './sort/sort.service';

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
  constructor(private sortService: SortService) { }

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
}
