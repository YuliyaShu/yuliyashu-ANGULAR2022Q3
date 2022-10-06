import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  private submitted = new BehaviorSubject(false);
  // constructor() { }
  setSubmitted(value: boolean) {
    this.submitted.next(value);
  }

  getSubmitted() {
    return this.submitted;
  }
}
