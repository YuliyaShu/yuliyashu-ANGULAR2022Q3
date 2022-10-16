import { Component } from '@angular/core';
import { ResponseService } from './youtube/main/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private responseService: ResponseService) {}
  ngOnInit(): void {
    this.responseService.getItemsList().subscribe((value) => {
      if (Array.isArray(value)) {
        this.responseService.setItems(value);
      }
    });
  }
}
