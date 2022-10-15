import {
  Directive, ElementRef, Injectable, Input, OnInit,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive({
  selector: '[appColorLine]',
})
export class ColorLineDirective implements OnInit {
  @Input('appColorLine') publishedAt = '';
  colors = {
    red: '#eb5757',
    yellow: '#f2c94c',
    green: '#27ae60',
    blue: '#2f80ed',
  };
  days = 0;
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.days = this.daysBetween(this.publishedAt);
    this.changeColor(this.el, this.days);
  }

  changeColor(el: ElementRef, days: number) {
    const element = el;
    if (days < 7) {
      element.nativeElement.style.backgroundColor = this.colors.blue;
    }
    if (days >= 7 && days < 30) {
      element.nativeElement.style.backgroundColor = this.colors.green;
    }
    if (days >= 30 && days < 180) {
      element.nativeElement.style.backgroundColor = this.colors.yellow;
    }
    if (days >= 180) {
      element.nativeElement.style.backgroundColor = this.colors.red;
    }
  }

  daysBetween(date: string) {
    return Math.round((Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24));
  }
}
