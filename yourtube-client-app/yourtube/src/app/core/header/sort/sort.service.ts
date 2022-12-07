import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SortService {
  private settingsOn = new BehaviorSubject(false);

  setSettingsOn(value: boolean) {
    this.settingsOn.next(value);
  }

  getSettingsOn() {
    return this.settingsOn;
  }
}
