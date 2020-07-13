import { TestBed } from '@angular/core/testing';

import { RickAndMortySService } from './rick-and-morty-s.service';

describe('RickAndMortySService', () => {
  let service: RickAndMortySService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortySService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
