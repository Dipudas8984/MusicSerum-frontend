import { TestBed } from '@angular/core/testing';

import { PlayDataService } from './play-data.service';

describe('PlayDataService', () => {
  let service: PlayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
