import {
  Directive, ElementRef, Injectable, Input, OnInit, Renderer2,
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.days = this.daysBetween(this.publishedAt);
    this.changeColor(this.days);
  }

  changeColor(days: number) {
    if (days < 7) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.colors.blue);
    }
    if (days >= 7 && days < 30) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.colors.green);
    }
    if (days >= 30 && days < 180) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.colors.yellow);
    }
    if (days >= 180) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.colors.red);
    }
  }

  daysBetween(date: string) {
    return Math.round((Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24));
  }
}
