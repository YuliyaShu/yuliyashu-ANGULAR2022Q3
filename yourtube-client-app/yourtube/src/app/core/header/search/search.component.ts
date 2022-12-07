import {
  Component, Injectable, OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime, distinctUntilChanged, filter,
} from 'rxjs';

import { ResponseService } from '../../../youtube/main/response.service';
import { config } from './search.constants';
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
  text = new FormControl();
  submitted = false;

  constructor(
    private searchService: SearchService,
    private responseService: ResponseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.text.valueChanges.pipe(
      filter((item) => item!.length >= config.SEARCH_LENGTH),
      debounceTime(config.DEBOUNCE_TIME),
      distinctUntilChanged(),
    ).subscribe((value) => {
      this.submitted = true;
      this.searchService.setSubmitted(true);
      this.responseService.getItemsList(value).subscribe((itemList) => {
        if (Array.isArray(itemList)) {
          this.responseService.setItems(itemList);
        }
      });
      this.router.navigateByUrl('');
    });
  }
}
