import { Component, OnInit } from '@angular/core';
import { SearchService } from './search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  submitted = false;
  result = this.searchService.getSubmitted().subscribe((value) => {
    this.submitted = value;
    return value;
  });

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}
