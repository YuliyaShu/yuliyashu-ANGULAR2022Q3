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
    console.log('🚀 ~ this.submitted.value set', this.submitted.value);
  }

  getSubmitted() {
    console.log('🚀 ~ this.submitted.value get', this.submitted.value);
    return this.submitted;
  }
}
