import { TestBed } from '@angular/core/testing';

import { SortItemsService } from './sort-items.service';

describe('SortItemsService', () => {
  let service: SortItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
