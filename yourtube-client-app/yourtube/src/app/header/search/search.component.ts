import {
  Component, Injectable, OnInit, Output, EventEmitter,
} from '@angular/core';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() newSubmitEvent = new EventEmitter<boolean>();
  search: String = '';
  submitted = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.newSubmitEvent.emit(true);
    this.searchService.setSubmitted(true);
  }
}
